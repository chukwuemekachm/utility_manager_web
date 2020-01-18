import * as React from 'react';
import styled from '@emotion/styled';

export interface AvatarProps {
  imgUrl: string;
  altText: string;
}

export default function Avatar({ imgUrl, altText }: AvatarProps): React.ReactElement<AvatarProps> {
  return <Avatar.Wrapper src={imgUrl} alt={altText} />;
}

Avatar.Wrapper = styled.img`
  height: 4.4375em;
  width: 4.313125em;
  border-radius: 50%;
  object-fit: cover;
`;
