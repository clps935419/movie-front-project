const reducer = (state, action) => {
  switch (action.type) {
    case 'signin':
      return { ...state, status: 'signin' };
    case 'signup':
      return { ...state, status: 'signup' };
    case 'recoverPassword':
      return { ...state, status: 'recoverPassword' };
    default:
      throw new Error();
  }
};

export default reducer;
