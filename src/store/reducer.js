const initialState = {
  authenticated: false,
  cookie: ""
};

const reducer = (state = initialState, action) => {
  if (action.type === "SET_COOKIE") {
    console.log(action.value);
    return {
      authenticated: true,
      cookie: action.value
    };
  }
  return state;
};

export default reducer;
