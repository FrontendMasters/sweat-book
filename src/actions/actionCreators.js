import { createAsyncCreator } from '../services/asyncCreators';
import * as api from '../services/api';
import * as types from './types';

export const fetchCurrentWorkout = () => (
  createAsyncCreator(
    types.FETCH_CURRENT_WORKOUT,
    types.FETCH_CURRENT_WORKOUT_COMPLETE,
    () => api.get('current_workout')
  )
);


export const addExerciseToCurrentWorkout = (exercise) => (
  createAsyncCreator(
    types.ADD_EXERCISE,
    types.ADD_EXERCISE_COMPLETE,
    () => api.post('current_workout', exercise)
  )
);
