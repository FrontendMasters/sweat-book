import { createAction } from 'redux-actions';

export const createAsyncCreator = (startAction, endAction, asycnFn) => (
  dispatch => {
    dispatch(createAction(startAction)());
    const dispatchEndAction = createAction(endAction);
    asycnFn(dispatch)
    .then(result => dispatch(dispatch(result)))
    .catch(e => {
      console.error(e);
      dispatch(dispatchEndAction(e));
    });
  }
);
