import * as React from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';

import Form from 'components/ui/Form';
import withDashboardContainer, { DashboardProps } from 'components/containers/DashBoardContainer';
import Input from 'components/ui/Input';
import Checkbox from 'components/ui/Checkbox';
import { changeLoggedInUserPassword } from 'store/actions/auth';
import __spacing from 'settings/__spacing';

interface UpdatePasswordProps {
  handleSubmit: (trigger: string) => (values: Record<string, any>) => void;
  callUpdatePassword: (payload: any) => void;
  newPassword: string;
  currentPassword: string;
  confirmPassword: string;
  status: {
    hasError: boolean;
    isLoading: boolean;
  };
}

function UpdatePassword(props: UpdatePasswordProps): React.ReactElement<{}> {
  const { handleSubmit, status } = props;
  const defaults = {
    newPassword: '',
    currentPassword: '',
    confirmPassword: '',
  };
  function isAnyInputBoxEmpty(composedProps) {
    const { values } = composedProps;
    const inputVals = [values.newPassword, values.currentPassword, values.confirmPassword];

    return inputVals.some(value => value === '');
  }

  return (
    <UpdatePassword.Wrapper>
      <Form
        handleSubmit={handleSubmit('UPDATE_PASSWORD')}
        isLoading={status.isLoading}
        submitButtonLabel="Update Password"
        validationSchemaKey="updatePassword"
        defaultValues={defaults}
        handleShouldDisableButton={isAnyInputBoxEmpty}
        imageInputName="logo"
      >
        {({ handleChange, handleBlur, values, errors }): React.ReactNode => (
          <>
            <Input
              type={values.showPassword ? 'text' : 'password'}
              name="currentPassword"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Current Password"
              value={values.currentPassword}
              errorFeedback={errors.currentPassword}
            />
            <Input
              type={values.showPassword ? 'text' : 'password'}
              name="newPassword"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="New Password"
              value={values.newPassword}
              errorFeedback={errors.newPassword}
            />
            <Input
              type={values.showPassword ? 'text' : 'password'}
              name="confirmPassword"
              handleChange={handleChange}
              handleBlur={handleBlur}
              title="Confirm Password"
              value={values.confirmPassword}
              errorFeedback={errors.confirmPassword}
            />
            <Checkbox
              name="showPassword"
              handleChange={handleChange}
              handleBlur={handleBlur}
              value={values.showPassword}
              errorFeedback={errors.confirmPassword}
              checked={values.showPassword}
            >
              Show Passwords
            </Checkbox>
          </>
        )}
      </Form>
    </UpdatePassword.Wrapper>
  );
}

UpdatePassword.Wrapper = styled.section`
  background-color: white;
  padding: ${__spacing.xLarge};
`;

const mapStateToProps = (state): Pick<UpdatePasswordProps, 'status'> => ({
  status: state.auth.status,
});

const mapDispatchToProps = (dispatch): Pick<UpdatePasswordProps, 'callUpdatePassword'> => ({
  callUpdatePassword: (payload): void => dispatch(changeLoggedInUserPassword(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withDashboardContainer(UpdatePassword));
