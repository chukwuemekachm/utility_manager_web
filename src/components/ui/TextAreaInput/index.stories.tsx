import React from 'react';
import { action } from '@storybook/addon-actions';
import { text, array, number } from '@storybook/addon-knobs';
import TextArea, { TextAreaProps } from '.';

export default {
  component: TextArea,
  title: 'components/ui/TextAreaInput',
};

export const textArea = (): React.ReactElement<TextAreaProps> => {
  return (
    <TextArea
      rows={number('rows', 6)}
      name={text('name', 'categoryDescription')}
      title={text('title', 'Category Description')}
      value={text('value', '')}
      errorFeedback={array('errorFeedback', ['Missing Field', 'Category description must be at least 5 characters'])}
      handleChange={action('Clicked')}
      handleBlur={action('Blur Handler!!')}
    />
  );
};
