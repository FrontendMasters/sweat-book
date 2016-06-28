import { createAction } from 'redux-actions';
import * as types from './types';

export const setExcerciseModalVisibility = (visible) => (
  createAction(types.SET_EXECERCISE_VISIBILITY)(visible)
);
