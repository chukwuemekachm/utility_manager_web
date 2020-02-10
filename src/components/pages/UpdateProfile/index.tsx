import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import Form from 'components/ui/Form';
import withDashboardContainer, { DashboardProps } from 'components/containers/DashBoardContainer';
import Input from 'components/ui/Input';
import { updateProfile } from 'store/actions/auth';
import __spacing from 'settings/__spacing';

interface UpdateProfileProps extends DashboardProps {
  callUpdateProfile: (payload: any) => void;
  profile: {
    firstName: string;
    lastName: string;
    username: string;
    imageURL: string;
  };
  isLoading: boolean;
  error: {
    message: string;
    errors: string[];
  };
}

function UpdateProfile(props: UpdateProfileProps): React.ReactElement<{}> {
  const { handleSubmit, isLoading, profile, error } = props;

  function hasAnyValueChanged(composedProps): boolean {
    const { values } = composedProps;
    return (
      values.firstName == profile.firstName &&
      values.lastName == profile.lastName &&
      values.username == profile.username &&
      !values.imageFile
    );
  }

  function pickErrors(formErrors) {
    let returnedErrors;
    if (Object.keys(formErrors).length) {
      returnedErrors = formErrors;
    } else {
      returnedErrors = error.errors;
    }

    return returnedErrors;
  }

  const defaults = {
    firstName: profile.firstName,
    lastName: profile.lastName,
    imageURL: profile.imageURL,
    username: profile.username,
  };

  return (
    <UpdateProfile.Wrapper>
      <Form
        handleSubmit={handleSubmit('UPDATE_PROFILE')}
        isLoading={isLoading}
        submitButtonLabel="Update Profile"
        validationSchemaKey="updateProfile"
        defaultValues={defaults}
        handleShouldDisableButton={hasAnyValueChanged}
        imageInputName="image"
        imageErrFeedbackHandler={pickErrors}
      >
        {({ handleChange, handleBlur, values, errors }): React.ReactNode => (
          <>
            <Input
              name="firstName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="First Name"
              value={values.firstName}
              errorFeedback={pickErrors(errors).firstName}
            />
            <Input
              name="lastName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Last Name"
              value={values.lastName}
              errorFeedback={pickErrors(errors).lastName}
            />
            <Input
              name="username"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Username"
              value={values.username}
              errorFeedback={pickErrors(errors).username}
              autoComplete="username"
            />
          </>
        )}
      </Form>
    </UpdateProfile.Wrapper>
  );
}

UpdateProfile.Wrapper = styled.section`
  background-color: white;
  padding: ${__spacing.large};
`;

const mapStateToProps = (state): Pick<UpdateProfileProps, 'profile' | 'error'> => ({
  profile: state.auth.profile,
  error: state.auth.error,
});

const mapDispatchToProps = (dispatch): Pick<UpdateProfileProps, 'callUpdateProfile'> => ({
  callUpdateProfile: (payload): void => dispatch(updateProfile(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withDashboardContainer(UpdateProfile));
