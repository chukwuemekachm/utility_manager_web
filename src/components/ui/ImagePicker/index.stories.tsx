import ImagePicker, { ImagePickerProps } from '.';
import * as React from 'react';
import { array, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

export default {
  component: ImagePicker,
  title: 'components/ui/ImagePicker',
};
const defaultValue =
  'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80';

export function imagePicker(): React.ReactElement<ImagePickerProps> {
  return (
    <ImagePicker
      name={text('name', 'firstName')}
      imageURL={text('imageURL', defaultValue)}
      errorFeedback={array('errorFeedback', ['Missing Field', 'First name must be at least 5 characters'])}
      handleChange={action('Clicked')}
      handleBlur={action('Blur Handler!!')}
      altText={text('altImage', 'firstName')}
    />
  );
}
