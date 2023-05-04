import React, { useReducer, useEffect } from 'react';
import LoginContext from './store/LoginContext';
import LoginReducer from './store/LoginReducer';
import { Modal } from 'bootstrap';
import SignIn from './SignIn';
import SignUp from './SignUp';
import RecoverPassword from './RecoverPassword';

const LoginModal = ({ modalRef }) => {
  const [state, dispatch] = useReducer(LoginReducer, { status: 'signin' });

  const changeSignIn = () => {
    dispatch({ type: 'signin' });
  };

  const changeSignUp = () => {
    dispatch({ type: 'signup' });
  };

  const changeRecoverPassword = () => {
    dispatch({ type: 'recoverPassword' });
  };

  const closeModal = () => {
    const modal = modalRef.current;
    Modal.getInstance(modal).hide();
  };

  useEffect(() => {
    const modal = modalRef.current;
    modal.addEventListener('hidden.bs.modal', changeSignIn);
    return () => {
      modal.removeEventListener('hidden.bs.modal', changeSignIn);
    };
  }, [modalRef]);

  let content = <SignIn closeModal={closeModal} />;

  if (state.status === 'signup') content = <SignUp closeModal={closeModal} />;
  if (state.status === 'recoverPassword') content = <RecoverPassword closeModal={closeModal} />;

  return (
    <LoginContext.Provider value={{ state, changeSignIn, changeSignUp, changeRecoverPassword }}>
      <div className="modal" tabIndex={-1} ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">{content}</div>
        </div>
      </div>
    </LoginContext.Provider>
  );
};

export default LoginModal;
