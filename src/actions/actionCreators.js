import { createAsyncCreator } from '../services/asyncCreators';
import { AsyncStorage } from 'react-native';
import * as types from './types';

export const fetchCurrentWorkout = () => (
  (dispatch, getState) => (
    getState().currentWorkout.length ?
      Promise.resolve() :
      createAsyncCreator(
        types.FETCH_CURRENT_WORKOUT,
        types.FETCH_CURRENT_WORKOUT_COMPLETE,
        () => AsyncStorage.getItem('currentWorkout')
      )
  )
);
