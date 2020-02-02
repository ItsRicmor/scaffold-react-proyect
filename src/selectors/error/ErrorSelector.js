import { createSelector } from 'reselect';

/**
 * @typedef {Object.<string, HttpErrorResponseModel>} IErrorState
 */

/**
 * ErrorSelector
 *
 * @static
 */
export class ErrorSelector {
  /**
   * Returns a new object with the keys being the finished action type
   * (e.g. "SomeAction.REQUEST_*_FINISHED") and the value being a
   * HttpErrorResponseModel.
   *
   * @param {IErrorState} errorState
   * @param {string[]} actionTypes
   * @returns {IErrorState}
   * @static
   */
  static selectRawErrors(errorState, actionTypes) {
    return actionTypes.reduce((partialState, actionType) => {
      const httpErrorResponseModel = errorState[actionType];

      if (httpErrorResponseModel) {
        partialState[actionType] = httpErrorResponseModel;
      }

      return partialState;
    }, {});
  }

  /**
   * Finds any errors matching the array of actionTypes and combines all error
   * messages in to a single string.
   *
   * @param {IErrorState} errorState
   * @param {string[]} actionTypes
   * @returns {string}
   * @static
   */
  static selectErrorText(errorState, actionTypes) {
    const errorList = actionTypes.reduce((errorMessages, actionType) => {
      const httpErrorResponseModel = errorState[actionType];

      if (httpErrorResponseModel) {
        const { message, errors } = httpErrorResponseModel;
        const arrayOfErrors = errors.length ? errors : [message];

        return errorMessages.concat(arrayOfErrors);
      }

      return errorMessages;
    }, []);

    return errorList.join(', ');
  }

  /**
   * Returns true or false if there are errors found matching the array of actionTypes.
   *
   * @param {IErrorState} errorState
   * @param {string[]} actionTypes
   * @returns {boolean}
   * @static
   */
  static hasErrors(errorState, actionTypes) {
    return actionTypes.map((actionType) => errorState[actionType]).filter(Boolean).length > 0;
  }
}

export const selectRawErrors = createSelector(
  (state) => state.error,
  (state, actionTypes) => actionTypes,
  ErrorSelector.selectRawErrors
);

export const selectErrorText = createSelector(
  (state) => state.error,
  (state, actionTypes) => actionTypes,
  ErrorSelector.selectErrorText
);

export const hasErrors = createSelector(
  (state) => state.error,
  (state, actionTypes) => actionTypes,
  ErrorSelector.hasErrors
);
