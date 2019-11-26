import * as notificationConstants from './constants';

export const showNotification = payload => ({
  type: notificationConstants.SHOW_NOTIFICATION,
  payload,
});

export const hideNotification = () => ({
  type: notificationConstants.HIDE_NOTIFICATION,
});

export {
  notificationConstants,
};
