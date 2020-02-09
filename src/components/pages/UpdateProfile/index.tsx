import * as React from 'react';
import styled from '@emotion/styled';
import Form from 'components/ui/Form';
import withDashboardContainer, { DashboardProps } from 'components/containers/DashBoardContainer';
import Input from 'components/ui/Input';
import Avatar from 'components/ui/Avatar';
import Icon from 'components/ui/Icon';
import ImagePicker from 'components/ui/ImagePicker';
import { connect } from 'react-redux';
import { fetchUpdateProfile } from 'store/actions/dashboard';
interface UpdateProfileProps extends DashboardProps {
  callUpdateProfile: (payload: any) => void;
  profile: {
    firstName: string;
    lastName: string;
    username: string;
    imageURL: string;
  };
  isLoading: boolean;
}

function UpdateProfile(props: UpdateProfileProps): React.ReactElement<{}> {
  const { handleSubmit, isLoading, profile } = props;

  function handleImgChange(event, handleChange, values) {
    values.imageURL = URL.createObjectURL(event.target.files[0]);
    values.image = event.target.files[0];
    handleChange(event);
  }

  function hasAnyValueChanged(composedProps): boolean {
    const { values } = composedProps;
    return (
      values.firstName == profile.firstName &&
      values.lastName == profile.lastName &&
      values.username == profile.username &&
      !values.logo
    );
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
      >
        {({ handleChange, handleBlur, values, errors }): React.ReactNode => (
          <UpdateProfile.FormWrapper>
            <div className="image-picker-wrapper">
              <ImagePicker
                handleChange={e => handleImgChange(e, handleChange, values)}
                imageURL={values.imageURL}
                name="logo"
              />
            </div>

            <Input
              name="firstName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="First Name"
              value={values.firstName}
              errorFeedback={errors.firstName}
            />
            <Input
              name="lastName"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Last Name"
              value={values.lastName}
              errorFeedback={errors.lastName}
            />
            <Input
              name="username"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Username"
              value={values.username}
              errorFeedback={errors.username}
              autoComplete="username"
            />
          </UpdateProfile.FormWrapper>
        )}
      </Form>
    </UpdateProfile.Wrapper>
  );
}

UpdateProfile.Wrapper = styled.section`
  background-color: white;
  padding-top: 4%;
`;

UpdateProfile.FormWrapper = styled.section`
  .image-picker-wrapper {
    display: flex;
    justify-content: center;
  }
  position: relative;
  margin-bottom: 9%;
  padding: 0.5% 2%;
`;

const mapStateToProps = (state): Pick<UpdateProfileProps, 'profile'> => ({
  profile: state.dashboard.retrieveProfile.data,
});

const mapDispatchToProps = (dispatch): Pick<UpdateProfileProps, 'callUpdateProfile'> => ({
  callUpdateProfile: (payload): void => dispatch(fetchUpdateProfile(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withDashboardContainer(UpdateProfile));
