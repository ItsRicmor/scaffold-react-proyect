import ToastStatusEnum from '../constants/ToastStatus';
import * as ToastsAction from '../stores/toasts/ToastsAction';

export default function errorToastMiddleware() {
  return (store) => (next) => (action) => {
    if (action.error) {
      const errorAction = action;
      next(ToastsAction.add(errorAction.payload.message, ToastStatusEnum.Error));
    }

    next(action);
  };
}
