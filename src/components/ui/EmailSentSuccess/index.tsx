import * as React from 'react';
import styled from '@emotion/styled';
import __spacing from 'settings/__spacing';
import __layouts from 'settings/__layouts';
import { fontSizes } from 'settings/__fonts';
import { GRAY } from 'settings/__color';

interface EmailSentSuccessProps {
  message: string;
}

const EMAIL_IMAGE =
  'https://trello-attachments.s3.amazonaws.com/5db1b02b5b9a3e413fb742f2/5ddd0139b88cae26568ed400/ac49' +
  'dbf3c29bc291362a3ca14c393b77/undraw_Mail_sent_qwwx.svg';

function EmailSentSuccess({ message }: EmailSentSuccessProps): React.ReactElement<EmailSentSuccessProps> {
  return (
    <EmailSentSuccess.Wrapper>
      <EmailSentSuccess.Image src={EMAIL_IMAGE} alt="Mail Sent Image" />
      <p>{message}</p>
    </EmailSentSuccess.Wrapper>
  );
}

EmailSentSuccess.Image = styled.img`
  height: 15.5em;
  width: 14.25em;
  margin: 0;

  @media (max-width: ${__layouts.xSm}) and (max-height: ${__layouts.xSm}) {
    width: 100%;
  }
`;

EmailSentSuccess.Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    text-align: center;
    margin-top: ${__spacing.normal};
    color: ${GRAY};
    font-size: ${fontSizes.small};
  }
`;

export default EmailSentSuccess;
