import { createAction } from 'redux-actions';
import * as types from './types';

// create action for adding an exercise

export const setExerciseModalVisibility = (visible) => (
  createAction(types.SET_EXECERCISE_VISIBILITY)(visible)
);
