import * as React from 'react';
import styled from '@emotion/styled';

import __spacing from 'settings/__spacing';
import __layouts from 'settings/__layouts';
import { fontSizes } from 'settings/__fonts';
import { GRAY } from 'settings/__color';

export enum imageTypes {
  email,
  expiredLink,
}
interface AuthMessageProps {
  children: React.ReactNode;
  imageType?: imageTypes;
}

function AuthMessage({
  children,
  imageType = imageTypes.email,
}: AuthMessageProps): React.ReactElement<AuthMessageProps> {
  const EMAIL_IMAGE =
    'https://trello-attachments.s3.amazonaws.com/5db1b02b5b9a3e413fb742f2/5ddd0139b88cae26568ed400/ac49' +
    'dbf3c29bc291362a3ca14c393b77/undraw_Mail_sent_qwwx.svg';

  const LINK_IMAGE =
    'https://res.cloudinary.com/maintenance-site/image/upload/' +
    'v1578688148/Utility%20Manager/undraw_share_link_qtxe_1.png';

  let src,
    alt = '';
  if (imageType == imageTypes.email) {
    src = EMAIL_IMAGE;
    alt = 'Mail Sent Image';
  } else {
    src = LINK_IMAGE;
    alt = 'Link expired Image';
  }
  return (
    <AuthMessage.Wrapper>
      <AuthMessage.Image src={src} alt={alt} />
      <AuthMessage.ChildrenWrapper>{children}</AuthMessage.ChildrenWrapper>
    </AuthMessage.Wrapper>
  );
}

AuthMessage.Image = styled.img`
  height: 15.5em;
  width: 14.25em;
  margin: 0;

  @media (max-width: ${__layouts.xSm}) and (max-height: ${__layouts.xSm}) {
    width: 100%;
  }
`;

AuthMessage.Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

AuthMessage.ChildrenWrapper = styled.div`
  text-align: center;
  margin-top: ${__spacing.normal};
  color: ${GRAY};
  font-size: ${fontSizes.small};
`;

export default AuthMessage;
