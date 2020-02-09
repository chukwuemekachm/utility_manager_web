import InputErrors from '.';
import * as React from 'react';
import { array, text } from '@storybook/addon-knobs';

export default {
  component: InputErrors,
  title: 'components/ui/InputErrors',
};

export function inputErrors() {
  return (
    <InputErrors
      errorFeedback={array('errorFeedback', ['Missing Field', 'First name must be at least 5 characters'])}
    />
  );
}
