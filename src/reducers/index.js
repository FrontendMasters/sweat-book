import { exercises } from './exercises';
import { ui } from './ui';
import { currentWorkout } from './currentWorkout';
import { combineReducers } from 'redux';

export default combineReducers({
  exercises,
  ui,
  currentWorkout
});
