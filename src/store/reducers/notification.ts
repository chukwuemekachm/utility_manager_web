import { notificationConstants } from 'store/actions/notification';

const initialState = {
  status: {
    isOpen: false,
  },
  type: '',
  message: '',
};

export default function notificationReducer(state = initialState, { type, payload }) {
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
      };
    default:
      return state;
  }
}
