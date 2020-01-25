import * as notificationConstants from './constants';

export const showNotification = (payload): Action => ({
  type: notificationConstants.SHOW_NOTIFICATION,
  payload,
});

export const hideNotification = (): Action => ({
  type: notificationConstants.HIDE_NOTIFICATION,
});

export { notificationConstants };
