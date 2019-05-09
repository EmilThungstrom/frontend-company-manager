const initialState = {
  authenticated: false
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET_AUTH_TRUE") {
    return {
      authenticated: true
    };
  }
  if (action.type === "SET_AUTH_FALSE") {
    return {
      authenticated: false
    };
  }
  return state;
};

export default reducer;
