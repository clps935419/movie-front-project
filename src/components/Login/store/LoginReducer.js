const reducer = (state, action) => {
  switch (action.type) {
    case 'singin':
      return { ...state, status: 'singin' };
    case 'singup':
      return { ...state, status: 'singup' };
    default:
      throw new Error();
  }
};

export default reducer;
