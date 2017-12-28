const defaultState = {
  pauseDuration: 60000,
  pickDuration: 60000,
  voteDuration: 60000,
  secureDuration: 10000,
  currentNode: 1,
  pickingPlayer: false,
  nodes: [
    {id: 1, status: false, players:[]},
    {id: 2, status: false, players: []},
    {id: 3, status: false, players: []},
    {id: 4, status: false, players:[]},
    {id: 5, status: false, players:[]},
  ]
};
const game = (state = defaultState, action) => {
  switch (action.type){
  case 'SET_PICKER' :
    console.log({ 
      ...state,
      pickingPlayer: action.id
    });
    return { 
      ...state,
      pickingPlayer: action.id
    };
  case 'CLEAR_PLAYERS' :
    return Object.assign({}, state, {players: []});
  default:
    return state;
  }
};

export default game;
