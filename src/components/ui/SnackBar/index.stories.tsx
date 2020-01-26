import React from 'react';
import { text, select, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { SnackBar, SnackBarProps } from '.';

export default {
  component: SnackBar,
  title: 'components/ui/SnackBar',
};

const durationLabel = 'duration';
const durationDefaultValue = 4000;

const isNotificationOpenLabel = 'isNotificationOpen';
const isNotificationOpenDefaultValue = true;

const typeLabel = 'type';
const typeOptions = {
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
  INFO: 'INFO',
};
const typeDefaultValue = 'SUCCESS';

const messageLabel = 'message';
const messageDefaultValue = 'A simple success message.';

export const snackBar = (): React.ReactElement<SnackBarProps> => (
  <SnackBar
    hideSnackBar={action('hide snack bar fired')}
    isNotificationOpen={boolean(isNotificationOpenLabel, isNotificationOpenDefaultValue)}
    duration={number(durationLabel, durationDefaultValue)}
    type={select(typeLabel, typeOptions, typeDefaultValue)}
    message={text(messageLabel, messageDefaultValue)}
  />
);
