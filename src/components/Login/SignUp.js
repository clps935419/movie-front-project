import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { apiTest } from '@/api';
import LoginContext from './store/LoginContext';

const { postSignup } = apiTest;
const SignUp = ({ closeModal }) => {
  const navigate = useNavigate();
  const context = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignUp = async () => {
    await postSignup({ data: { email, password, checkPassword: passwordCheck } })
      .then(({ data }) => {
        if (data.status === 'success') {
          closeModal();
          navigate('/member');
        }
      })
      .catch(({ response }) => setErrorMessage(response.data.message));
  };

  const handleBackSignIn = () => {
    context.changeSignIn();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordCheck = (e) => {
    setPasswordCheck(e.target.value);
  };

  return (
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title">會員註冊</h5>
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

        <div className="row mb-3">
          <label htmlFor="checkPassword" className="col-3 col-form-label">
            確認密碼
          </label>
          <div className="col-9">
            <input
              type="password"
              id="checkPassword"
              className="form-control"
              onChange={handlePasswordCheck}
              value={passwordCheck}
            />
          </div>
        </div>

        <p className="text-danger">{errorMessage}</p>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={handleBackSignIn}>
          返回登入
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSignUp}>
          註冊
        </button>
      </div>
    </div>
  );
};

export default SignUp;
