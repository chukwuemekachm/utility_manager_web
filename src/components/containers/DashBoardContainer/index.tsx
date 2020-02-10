import * as React from 'react';

export interface DashboardProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
}

export default function withDashboardContainer(WrappedComponent) {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return function DashBoardContainer(props: Record<string, any>) {
    function handleSubmit(trigger: string) {
      return function(values: Record<string, any>): Promise<void> {
        switch (trigger) {
          case 'UPDATE_PASSWORD':
            return props.callUpdatePassword(values);
          default:
            return props.callUpdateProfile(values);
        }
      };
    }

    function composeProps(): {} {
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
