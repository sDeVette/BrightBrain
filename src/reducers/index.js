import { combineReducers } from 'redux';
import players from './players';
import user from './user';
import game from './game';

const bbApp = combineReducers({
  players,
  user,
  game,
});
export default bbApp;
