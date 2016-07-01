import * as types from '../actions/types';

export const ui = (state = {
  activeTab: 0,
  exerciseModal: false
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
        exerciseModal: payload
      };
    default:
      return state;
  }
};
