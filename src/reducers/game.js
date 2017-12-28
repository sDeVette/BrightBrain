const defaultState = {
  pauseDuration: 60000,
  pickDuration: 60000,
  voteDuration: 60000,
  secureDuration: 10000,
  currentNode: 0,
  pickingPlayer: false,
  nodes: [
    {id: 1, status: false, players:[], size:2},
    {id: 2, status: false, players: [], size:3},
    {id: 3, status: false, players: [], size:2},
    {id: 4, status: false, players:[], size:3},
    {id: 5, status: false, players:[], size:2},
  ]
};
const game = (state = defaultState, action) => {
  switch (action.type){
  case 'INIT_GAME' :
    return {
      ...state,
      state: action.game
    };
  case 'SET_PICKER' :
    return { 
      ...state,
      pickingPlayer: action.id
    };
  case 'ADD_PLAYER_TO_NODE' :
    const copy = {...state};
    console.log(action.id);
    copy.nodes[copy.currentNode].players.push(action.id);
    return copy;
    // [state.nodes[state.currentNode].players, action.id],
  case 'CLEAR_PLAYERS' :
    return Object.assign({}, state, {players: []});
  default:
    return state;
  }
};

export default game;
