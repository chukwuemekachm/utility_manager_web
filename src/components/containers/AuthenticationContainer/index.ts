import * as React from 'react';

export interface AuthenticationProps {
  handleSubmit: (trigger: string) => (event: React.FormEvent<HTMLFormElement>) => void;
}

const { SIGN_UP_REDIRECT_URL = `${window.location.origin}/dashboard` } = process.env;

export default function withAuthenticationContainer(WrappedComponent) {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return function AuthenticationContainer(props: Record<string, any>) {
    async function handleSignUp(values: Record<string, any>): Promise<void> {
      const { signUp } = props;
      return signUp({ ...values, redirectURL: SIGN_UP_REDIRECT_URL });
    }

    async function handleAuthOperation(validFuncName, values): Promise<void> {
      return props[validFuncName](values);
    }
    function handleSubmit(trigger: string) {
      return function(values: Record<string, any>): Promise<void> {
        switch (trigger) {
          case 'FORGOT_PASSWORD':
            return handleAuthOperation('forgotPassword', values);
          case 'NEW_PASSWORD':
            return handleAuthOperation('changePassword', values);
          case 'LOGIN':
            return handleAuthOperation('makeLoginRequest', values);
          default:
            return handleSignUp(values);
        }
      };
    }

    function composeProps(): AuthenticationProps {
      return {
        handleSubmit,
        ...props,
      };
    }

    /* TypeScript doesn't recognize WrappedComponent in JSX here
     * So I defaulted to using React.createElement
     */
    return React.createElement(WrappedComponent, composeProps());
  };
}
