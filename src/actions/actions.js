import { createAction } from 'redux-actions';
import * as types from './types';

export const setExerciseModalVisibility = (visible) => (
  createAction(types.SET_EXECERCISE_VISIBILITY)(visible)
);
