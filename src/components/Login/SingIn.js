import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiTest } from '@/api';

import LoginContext from './store/LoginContext';
const { postLogin } = apiTest;

const SingIn = ({ closeModal }) => {
  const navigate = useNavigate();
  const context = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSingIn = async () => {
    await postLogin({ data: { email, password } })
      .then(({ data }) => {
        if (data.status === 'success') {
          closeModal();
          navigate('/member');
        }
      })
      .catch(({ response }) => setErrorMessage(response.data.message));
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div className="modal-header">
        <h5 className="modal-title">會員登入</h5>
        <button type="button" className="btn-close" onClick={closeModal}></button>
      </div>
      <div className="modal-body">
        <div className="row mb-3">
          <label htmlFor="email" className="col-3 col-form-label">
            Email
          </label>
          <div className="col-9">
            <input type="email" id="email" className="form-control" onChange={handleEmail} value={email} />
          </div>
        </div>
        <div className="row mb-3">
          <label htmlFor="password" className="col-3 col-form-label">
            密碼
          </label>
          <div className="col-9">
            <input type="password" id="password" className="form-control" onChange={handlePassword} value={password} />
          </div>
        </div>

        <p className="text-danger">{errorMessage}</p>
      </div>

      <div className="modal-footer d-flex justify-content-between">
        <div>
          <button type="button" className="btn btn-primary me-2" onClick={closeModal}>
            忘記密碼
          </button>
          <button type="button" className="btn btn-primary" onClick={context.changeSingUp}>
            註冊
          </button>
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSingIn}>
          登入
        </button>
      </div>
    </>
  );
};

export default SingIn;
