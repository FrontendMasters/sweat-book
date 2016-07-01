import { createAsyncCreator } from '../services/asyncCreators';
import { AsyncStorage } from 'react-native';
import * as types from './types';

export const fetchCurrentWorkout = () => (
  createAsyncCreator(
    types.FETCH_CURRENT_WORKOUT,
    types.FETCH_CURRENT_WORKOUT_COMPLETE,
    () => AsyncStorage.getItem('currentWorkout')
  )
);


export const addExerciseToCurrentWorkout = (exercise) => (
  (dispatch, getState) => (
    dispatch(fetchCurrentWorkout())
    .then(() => {
      const { currentWorkout } = getState();
      const currentExercise = {
        ...exercise,
        sets: []
      };
      const updatedWorkout = [...currentWorkout, currentExercise];
      return createAsyncCreator(
        types.ADD_EXERCISE,
        types.ADD_EXERCISE_COMPLETE,
        () => AsyncStorage.setItem('currentWorkout', updatedWorkout)
      );
    })
  )
);
