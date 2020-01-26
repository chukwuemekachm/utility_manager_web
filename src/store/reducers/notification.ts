import { notificationConstants } from 'store/actions/notification';

interface NotificationState {
  status: {
    isOpen: boolean;
  };
  type: string;
  message: string;
  duration: number;
}

const initialState = {
  status: {
    isOpen: false,
  },
  type: '',
  message: '',
  duration: 0,
};

export default function notificationReducer(state = initialState, { type, payload }): NotificationState {
  switch (type) {
    case notificationConstants.SHOW_NOTIFICATION:
      return {
        ...state,
        status: {
          ...state.status,
          isOpen: true,
        },
        message: payload.message,
        type: payload.type,
        duration: payload.duration || 4000,
      };

    case notificationConstants.HIDE_NOTIFICATION:
      return {
        ...state,
        status: {
          ...state.status,
          isOpen: false,
        },
        message: '',
        type: '',
        duration: 0,
      };

    default:
      return state;
  }
}
