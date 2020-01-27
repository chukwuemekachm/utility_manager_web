import React from 'react';
import EditForm from '.';
import Input from '../Input';
import { text } from '@storybook/addon-knobs';

export default {
  component: EditForm,
  title: 'components/ui/EditForm',
};
export const editProfileFormWrapper = () => (
  <EditForm
    handleSubmit={(): null => null}
    handleInputBlur={(): null => null}
    submitButtonName={text('submitButtonName', 'submit')}
  >
    {() => (
      <Input
        title={text('title', 'Username')}
        autoComplete={text('autoComplete', 'on')}
        name={text('name', 'username')}
        value={text('title', 'emeka')}
        handleChange={(): null => null}
      />
    )}
  </EditForm>
);
