import * as types from '../actions/types';

export const ui = (state = {
  exerciseModal: false
}, { type, payload }) => {

  switch (type) {
    case types.SET_EXECERCISE_VISIBILITY:
      return {
        ...state,
        exerciseModal: payload
      };
    default:
      return state;
  }
};
