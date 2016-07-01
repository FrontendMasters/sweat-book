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


export const addExcerciseToCurrentWorkout = (excercise) => (
  (dispatch, getState) => (
    dispatch(fetchCurrentWorkout())
    .then(() => {
      const { currentWorkout } = getState();
      const currentExcercise = {
        ...excercise,
        sets: []
      };
      const updatedWorkout = [...currentWorkout, currentExcercise];
      return createAsyncCreator(
        types.ADD_EXCERCISE,
        types.ADD_EXCERCISE_COMPLETE,
        () => AsyncStorage.setItem('currentWorkout', updatedWorkout)
      );
    })
  )
);
