import React, { useReducer, useEffect } from 'react';
import LoginContext from './store/LoginContext';
import LoginReducer from './store/LoginReducer';
import { Modal } from 'bootstrap';
import SingIn from './SingIn';
import SingUp from './SingUp';

const LoginModal = ({ modalRef }) => {
  const [state, dispatch] = useReducer(LoginReducer, { status: 'singin' });

  const changeSingIn = () => {
    dispatch({ type: 'singin' });
  };

  const changeSingUp = () => {
    dispatch({ type: 'singup' });
  };

  const closeModal = () => {
    const modal = modalRef.current;
    Modal.getInstance(modal).hide();
  };

  useEffect(() => {
    const modal = modalRef.current;
    modal.addEventListener('hidden.bs.modal', changeSingIn);
    return () => {
      modal.removeEventListener('hidden.bs.modal', changeSingIn);
    };
  }, [modalRef]);

  return (
    <LoginContext.Provider value={{ state, changeSingIn, changeSingUp }}>
      <div className="modal" tabIndex={-1} ref={modalRef}>
        <div className="modal-dialog">
          <div className="modal-content">
            {state.status === 'singin' ? <SingIn closeModal={closeModal} /> : <SingUp closeModal={closeModal} />}
          </div>
        </div>
      </div>
    </LoginContext.Provider>
  );
};

export default LoginModal;
