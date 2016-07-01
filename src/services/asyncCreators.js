import { createAction } from 'redux-actions';

export const createAsyncCreator = (startAction, endAction, asycnFn) => (
  dispatch => {
    dispatch(createAction(startAction)());
    const dispatchEndAction = createAction(endAction);
    return asycnFn(dispatch)
    .then(result => dispatch(dispatchEndAction(result)))
    .catch(e => {
      console.error(e);
      dispatch(dispatchEndAction(e));
    });
  }
);
