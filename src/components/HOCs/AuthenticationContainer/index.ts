import * as React from 'react';
import { validatePayload } from 'lib/validator';

type AuthenticationFormValues = {
  firstName: string,
  lastName: string,
  email: string,
  password: string,
  confirmPassword: string,
  errors: Record<string, string[]>,
}

export interface AuthenticationProps {
  values: AuthenticationFormValues,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {},
};

export default function withAuthenticationContainer(WrappedComponent) {
  return function AuthenticationContainer(props: Record<string, any>) {
    const [values, setValues] = React.useState(initialState);

    function handleChange({ target: { value, name } }: React.ChangeEvent<HTMLInputElement>) {
      setValues({
        ...values,
        [name]: value,
      });
    }

    function handleBlur({ target: { value, name } }: React.FocusEvent<HTMLInputElement>) {
      if (value) {
        setValues({
          ...values,
          errors: {
            ...values.errors,
            [name]: [],
          }
        });
      }
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
      event.preventDefault();
      return handleSignUp();
    }

    async function handleSignUp() {
      const errors = await validatePayload(values, 'signUp');
      if (errors) {
        return setValues({
          ...values,
          errors,
        });
      }
    }

    function composeProps() {
      return {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        ...props,
      }
    }

    // TypeScript doesn't recognize WrappedComponent in JSX here
    // So I defaulted to using React.createElement
    return React.createElement(WrappedComponent, composeProps());
  }
}
