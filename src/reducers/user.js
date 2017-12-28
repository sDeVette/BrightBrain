const user = (state = {user:{color:{600:'#FFF'}}}, action) => {
  switch (action.type){
  case 'SET_USER' :
    console.log({ 
      ...state,
      user: action.user
    });
    return { 
      ...state,
      user: action.user
    };
  case 'CLEAR_USER' :
    return Object.assign({}, state, {user:{}});
  default:
    return state;
  }
};
  
export default user;