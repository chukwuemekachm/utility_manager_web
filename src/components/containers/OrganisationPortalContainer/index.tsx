import * as React from 'react';

export default function withOrganisationPortalContainer(WrappedComponent) {
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  return function OrganisationPortalContainer(props: Record<string, any>) {
    function handleSubmit(trigger: string) {
      return async function(values: Record<string, any>): Promise<void> {
        switch (trigger) {
          case 'CREATE_CATEGORY':
            return props.callCreateApplianceCategory({
              params: props.match.params,
              data: values,
            });
          case 'CREATE_PARAMETER':
            return props.callCreateParameter({
              params: props.match.params,
              data: values,
            });
          case 'ADD_APPLIANCE':
            return props.callCreateAppliance({
              params: props.match.params,
              data: values,
            });
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
