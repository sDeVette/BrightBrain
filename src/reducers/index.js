import { combineReducers } from 'redux';
import players from './players';
import user from './user';

const bbApp = combineReducers({
  players,
  user
});
export default bbApp;
