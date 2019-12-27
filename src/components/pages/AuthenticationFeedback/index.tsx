import * as React from 'react';
import { connect } from 'react-redux';

import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import EmailSentSuccess from 'components/ui/EmailSentSuccess';

type UserData = {
  firstName: string;
};

type NavigationData = {
  authSuccessType: string;
  userData: UserData;
};

interface AuthenticationFeedbackProps {
  navigationData: NavigationData;
}

function AuthenticationFeedback({
  navigationData,
}: AuthenticationFeedbackProps): React.ReactElement<AuthenticationFeedbackProps> {
  const name = navigationData.userData ? navigationData.userData.firstName : 'there!';
  const SIGNUP_MESSAGE = `Hi ${name}, your signup was  successful and a verification
        mail was sent to your email. Please confirm your email to continue.`;
  const RESET_PASSWORD_MESSAGE = `Hi there! Instructions to reset your password has been sent to your email.
         Please check it out to reset your password thanks!`;

  return (
    <AuthenticationLayout>
      <EmailSentSuccess
        message={navigationData.authSuccessType == 'SIGN_UP' ? SIGNUP_MESSAGE : RESET_PASSWORD_MESSAGE}
      />
    </AuthenticationLayout>
  );
}

const mapStateToProps = (state): Pick<AuthenticationFeedbackProps, 'navigationData'> => ({
  navigationData: state.navigation.data,
});

export default connect(mapStateToProps)(AuthenticationFeedback);
