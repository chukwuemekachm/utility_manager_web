import * as React from 'react';
import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import EmailSentSuccess from 'components/ui/EmailSentSuccess';
import {connect} from "react-redux";


function AuthenticationFeedback({navigationData}) {
    const name = navigationData.userData? navigationData.userData.firstName: 'there!'
    const SIGNUP_MESSAGE =  `Hi ${name}, your signup was  successful and a verification
        mail was sent to your email. Please confirm your email to continue.`;
    const RESET_PASSWORD_MESSAGE =
         `Hi there! Instructions to reset your password has been sent to your email.
         Please check it out to reset your password thanks!`;

  return (
  <AuthenticationLayout>
      <EmailSentSuccess
        message={
             navigationData.authSuccessType == 'SIGN_UP'?
                    SIGNUP_MESSAGE: RESET_PASSWORD_MESSAGE
        }
      />
  </AuthenticationLayout>
  );
}

const mapStateToProps = state =>({
    navigationData: state.navigation.data,
});


export default connect(mapStateToProps)(AuthenticationFeedback);

