import { user } from './user';
import { excericses } from './excercises';
import { ui } from './ui';
import { currentWorkout } from './currentWorkout';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  excericses,
  ui,
  currentWorkout
});
