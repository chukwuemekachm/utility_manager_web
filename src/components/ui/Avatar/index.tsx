import * as React from 'react';
import styled from '@emotion/styled';
import { Size } from 'components/ui/Icon';

export interface AvatarProps {
  imgUrl: string;
  altText: string;
  size?: Size;
}

export default function Avatar({ imgUrl, altText, size = 'LARGE' }: AvatarProps): React.ReactElement<AvatarProps> {
  return <Avatar.Wrapper src={imgUrl} alt={altText} size={size} />;
}

Avatar.Wrapper = styled.img<Pick<AvatarProps, 'size'>>`
  height: ${props => (props.size === 'NORMAL' ? '2.2em' : '4.4375em')};
  width: ${props => (props.size === 'NORMAL' ? '2.2em' : '4.313125em')};
  border-radius: 50%;
  object-fit: cover;
`;
