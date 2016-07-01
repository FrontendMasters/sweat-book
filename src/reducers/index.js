import { user } from './user';
import { excercises } from './excercises';
import { ui } from './ui';
import { currentWorkout } from './currentWorkout';
import { categories } from './categories';
import { combineReducers } from 'redux';

export default combineReducers({
  user,
  excercises,
  ui,
  currentWorkout,
  categories
});
