const players = (state = {players:[]}, action) => {
  switch (action.type){
  case 'SET_PLAYERS' :
    console.log( { 
      ...state,
      players: action.players
    });
    return { 
      ...state,
      players: action.players
    };
  case 'CLEAR_PLAYERS' :
    return Object.assign({}, state, {players: []});
  default:
    return state;
  }
};

export default players;