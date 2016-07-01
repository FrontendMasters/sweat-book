import { user } from './user';
import { exercises } from './exercises';
import { ui } from './ui';
import { currentWorkout } from './currentWorkout';
import { categories } from './categories';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  exercises,
  ui,
  currentWorkout,
  categories
});
