import * as React from 'react';
import { array } from '@storybook/addon-knobs';

import InputErrors from '.';
import { InputProps } from '../Input';

export default {
  component: InputErrors,
  title: 'components/ui/InputErrors',
};

export function inputErrors(): React.ReactElement<Pick<InputProps, 'errorFeedback'>> {
  return (
    <InputErrors
      errorFeedback={array('errorFeedback', ['Missing Field', 'First name must be at least 5 characters'])}
    />
  );
}
