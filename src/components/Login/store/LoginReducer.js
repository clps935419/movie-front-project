const reducer = (state, action) => {
  switch (action.type) {
    case 'singin':
      return { ...state, status: 'singin' };
    case 'singup':
      return { ...state, status: 'singup' };
    case 'recoverPassword':
      return { ...state, status: 'recoverPassword' };
    default:
      throw new Error();
  }
};

export default reducer;
