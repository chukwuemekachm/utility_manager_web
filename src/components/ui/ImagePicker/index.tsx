import * as React from 'react';
import styled from '@emotion/styled';

import Avatar from 'components/ui/Avatar';
import Icon from 'components/ui/Icon';
import InputErrors from 'components/ui/InputErrors';
import { InputProps } from 'components/ui/Input';

export interface ImagePickerProps extends Pick<InputProps, 'errorFeedback' | 'handleChange' | 'handleBlur'> {
  imageURL: string;
  name: string;
  altText?: string;
}

export default function ImagePicker(props: ImagePickerProps): React.ReactElement<ImagePickerProps> {
  const { imageURL, errorFeedback, handleChange, altText = 'Alt Image', name } = props;

  return (
    <ImagePicker.Wrapper htmlFor={name}>
      <ImagePicker.InnerWrapper>
        <Avatar imgUrl={imageURL} altText={altText} />
        <label htmlFor={name} className="top-label">
          <input
            onChange={handleChange}
            type="file"
            name={name}
            id={name}
            accept="image/x-png,image/gif,image/jpeg"
            hidden
          />
          <Icon iconType="md-create" size="LARGE" />
        </label>
      </ImagePicker.InnerWrapper>
      <InputErrors errorFeedback={errorFeedback} />
    </ImagePicker.Wrapper>
  );
}

ImagePicker.Wrapper = styled.label`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

ImagePicker.InnerWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;

  label {
    border-bottom-left-radius: 4.4375em;
    border-bottom-right-radius: 4.4375em;
    position: absolute;
    background-color: black;
    height: 2.21875em;
    width: 4.313125em;
    background-color: rgba(255, 255, 255, 0.8);
    left: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
  }
`;
