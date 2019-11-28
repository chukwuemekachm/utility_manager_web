import * as React from 'react';

import AuthenticationLayout from 'components/layouts/AuthenticationLayout';
import EmailSentSuccess from 'components/layouts/EmailSentSuccess';


export default function AuthenticationFeedback() {
  return (
  <AuthenticationLayout>
      <EmailSentSuccess/>
  </AuthenticationLayout>
  );
}
