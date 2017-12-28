import { userInfo } from 'os';

export const setPlayer = player => {
  console.log(player);
  return {
    type: 'SET_PLAYER',
    player
  };
};

export const clearPlayers = () => {
  return {
    type: 'CLEAR_PLAYERS'
  };
};

export const setUser = user => {
  console.log(user);
  return {
    type: 'SET_USER',
    user
  };
};
