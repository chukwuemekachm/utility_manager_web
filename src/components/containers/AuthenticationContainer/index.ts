import * as React from 'react';
import { validatePayload } from 'lib/validator';

type AuthenticationFormValues = {
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  usernameOrEmail: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  errors: Record<string, string[]>;
};

export interface AuthenticationProps {
  values: AuthenticationFormValues;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (trigger: string) => (event: React.FormEvent<HTMLFormElement>) => void;
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  username: '',
  usernameOrEmail: '',
  password: '',
  showPassword: false,
  confirmPassword: '',
  errors: {},
};

const { SIGN_UP_REDIRECT_URL = `${location.origin}/signup/redirect` } = process.env;

export default function withAuthenticationContainer(WrappedComponent) {
  return function AuthenticationContainer(props: Record<string, any>) {
    const [values, setValues] = React.useState(initialState);

    function handleChange({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) {
      setValues({
        ...values,
        [name]: name == 'showPassword' ? !values.showPassword : value,
      });
    }

    function handleBlur({ target: { value, name } }: React.FocusEvent<HTMLInputElement>) {
      if (value) {
        setValues({
          ...values,
          errors: {
            ...values.errors,
            [name]: [],
          },
        });
      }
    }

    async function handleSignUp(): Promise<void> {
      const { signUp } = props;
      const errors = await validatePayload(values, 'signUp');
      if (errors) {
        return setValues({
          ...values,
          errors,
        });
      }

      return signUp({ ...values, redirectURL: SIGN_UP_REDIRECT_URL });
    }

    async function handleAuthOperation(schemaKey, validFuncName) {
      const errors = await validatePayload(values, schemaKey);
      if (errors) {
        return setValues({
          ...values,
          errors,
        });
      }
      return props[validFuncName](values);
    }
    function handleSubmit(trigger: string) {
      return function(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const values = {};
        switch (trigger) {
          case 'FORGOT_PASSWORD':
            return handleAuthOperation('forgotPassword', 'forgotPassword');
          case 'SIGN_UP':
            return handleSignUp();
          case 'NEW_PASSWORD':
            return handleAuthOperation('changeUserPassword', 'changePassword');
          case 'LOGIN':
            return handleAuthOperation('validateLoginValues', 'makeLoginRequest');
          default:
            return handleSignUp();
        }
      };
    }

    function composeProps(): AuthenticationProps {
      return {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        ...props,
      };
    }

    // TypeScript doesn't recognize WrappedComponent in JSX here
    // So I defaulted to using React.createElement
    return React.createElement(WrappedComponent, composeProps());
  };
}
