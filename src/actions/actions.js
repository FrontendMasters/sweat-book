import { createAction } from 'redux-actions';
import * as types from './types';

export const addExercise = (exercise) => (
  createAction(types.ADD_EXERCISE)(exercise)
);

export const setExerciseModalVisibility = (visible) => (
  createAction(types.SET_EXECERCISE_VISIBILITY)(visible)
);
