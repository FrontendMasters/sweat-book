import * as types from '../actions/types';

export const ui = (state = {
  activeTab: 0,
  excerciseModal: false
}, { type, payload }) => {

  switch (type) {
    case types.CHANGE_TAB:
      return {
        ...state,
        activeTab: payload.activeTab
      };
    case types.SET_EXECERCISE_VISIBILITY:
      return {
        ...state,
        excerciseModal: payload
      };
    default:
      return state;
  }
};
