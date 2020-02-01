import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import requestingReducer from './requesting/RequestingReducer';
import errorReducer from './error/ErrorReducer';
import toastsReducer from './toasts/ToastsReducer';

export default function rootReducer(history) {
  const reducerMap = {
    error: errorReducer,
    requesting: requestingReducer,
    router: connectRouter(history),
    toasts: toastsReducer,
  };

  return combineReducers(reducerMap);
}