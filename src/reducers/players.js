const players = (state = {players:[]}, action) => {
  switch (action.type){
  case 'SET_PLAYER' :
    return { 
      ...state,
      players: [...state.players, action.player]
    };
  case 'CLEAR_PLAYERS' :
    return Object.assign({}, state, {players: []});
  default:
    return state;
  }
};

export default players;