import { userInfo } from 'os';

export const setPlayers = players => {
  console.log(players);
  return {
    type: 'SET_PLAYERS',
    players
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

export const setPicker = id => {
  return {
    type: 'SET_PICKER',
    id
  };
};


