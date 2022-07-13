import { useReducer } from 'react';
import { useCallback } from 'react';

const SEND_ACTION = 'SEND';
const SUCCESS_ACTION = 'SUCCESS';
const ERROR_ACTION = 'ERROR';

const httpReducer = (state, action) => {
  switch (action.type) {
    case SEND_ACTION:
      return {
        status: 'pending',
        data: null,
        error: null,
      };
    case SUCCESS_ACTION:
      return {
        status: 'completed',
        data: action.data,
        error: null,
      };
    case ERROR_ACTION:
      return {
        status: 'error',
        data: null,
        error: action.errMsg,
      };
    default:
      return state;
  }
};

export default function useHttp(requestFn) {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async requestData => {
      dispatch({ type: SEND_ACTION });
      try {
        const responseData = await requestFn(requestData);
        dispatch({ type: SUCCESS_ACTION, data: responseData });
      } catch (err) {
        dispatch({ type: ERROR_ACTION, errMsg: err.message });
      }
    },
    [requestFn]
  );

  return {
    sendRequest,
    ...httpState,
  };
}
