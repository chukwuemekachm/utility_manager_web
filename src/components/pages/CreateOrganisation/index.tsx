import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import withDashboardContainer from 'components/containers/DashBoardContainer';
import Form from 'components/ui/Form';
import { AuthenticationFormProps } from 'components/pages/Authentication';
import Input from 'components/ui/Input';
import ImagePicker from 'components/ui/ImagePicker';
import { createOrganisation } from 'store/actions/dashboard';
import __spacing from 'settings/__spacing';

interface CreateOrganisationProps extends AuthenticationFormProps {
  callCreateOrganisation: (payload: any) => void;
  isLoading: boolean;
  error: {
    message: string;
    errors: string[];
  };
}

function CreateOrganisation(props: CreateOrganisationProps): React.ReactElement<AuthenticationFormProps> {
  const { handleSubmit, isLoading, error } = props;

  function pickErrors(formErrors) {
    let returnedErrors;
    if (Object.keys(formErrors).length) {
      returnedErrors = formErrors;
    } else {
      returnedErrors = error.errors;
    }

    return returnedErrors;
  }

  function disbleCreateOrgButton(composedProps): boolean {
    const { values } = composedProps;
    return (
      typeof values.name == 'undefined' ||
      typeof values.website == 'undefined' ||
      typeof values.address == 'undefined' ||
      typeof values.imageFile == 'undefined' ||
      typeof values.displayName == 'undefined'
    );
  }

  const defaults = {
    imageURL: 'imageURl',
  };

  return (
    <CreateOrganisation.Wrapper>
      <Form
        handleSubmit={handleSubmit('CREATE_ORGANISATION')}
        isLoading={isLoading}
        submitButtonLabel="Create New Organisation"
        validationSchemaKey="validateCreateOrganisation"
        imageInputName="logo"
        handleShouldDisableButton={disbleCreateOrgButton}
        imageErrFeedbackHandler={pickErrors}
        defaultValues={defaults}
      >
        {({ handleChange, handleBlur, values, errors }): React.ReactNode => (
          <>
            <Input
              name="name"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Name"
              value={values.name}
              errorFeedback={pickErrors(errors).name}
            />
            <Input
              name="website"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Website"
              value={values.website}
              errorFeedback={pickErrors(errors).email}
            />
            <Input
              name="address"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Address"
              value={values.address}
              errorFeedback={pickErrors(errors).address}
            />
            <Input
              name="displayName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Display Name"
              value={values.displayName}
              errorFeedback={pickErrors(errors).displayName}
            />
          </>
        )}
      </Form>
    </CreateOrganisation.Wrapper>
  );
}

const mapStateToProps = (state): Pick<CreateOrganisationProps, 'error'> => ({
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch): Pick<CreateOrganisationProps, 'callCreateOrganisation'> => ({
  callCreateOrganisation: (payload): void => dispatch(createOrganisation(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withDashboardContainer(CreateOrganisation));

CreateOrganisation.Wrapper = styled.section`
  background-color: white;
  padding: ${__spacing.large};
`;
