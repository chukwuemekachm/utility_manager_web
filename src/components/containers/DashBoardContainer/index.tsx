import * as React from 'react';

export default function withDashboardContainer(WrappedComponent) {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return function DashBoardContainer(props: Record<string, unknown>) {
    function composeProps(): {} {
      return {
        ...props,
      };
    }

    /* TypeScript doesn't recognize WrappedComponent in JSX here
     * So I defaulted to using React.createElement
     */
    return React.createElement(WrappedComponent, composeProps());
  };
}
