import * as types from '../actions/types';

export const currentWorkout = (state = [], { type, payload }) => {
  switch (type) {
    case types.FETCH_CURRENT_WORKOUT_COMPLETE:
      return payload;
    case types.ADD_EXERCISE:
      return [payload, ...state];
    default:
      return state;
  }
};
