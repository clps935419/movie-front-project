import { useState, useContext } from 'react';
import { apiTest } from '@/api';
import LoginContext from './store/LoginContext';

const { postLogin } = apiTest;
const SingUp = ({ closeModal }) => {
  const context = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');

  const handleSingUp = async () => {
    await postLogin({ data: { email, password } }).then(({ data }) => {
      if (data.status === 'success') closeModal();
    });
  };

  const handleBackSingIn = () => {
    context.changeSingIn();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckPassword = (e) => {
    setCheckPassword(e.target.value);
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
              onChange={handleCheckPassword}
              value={checkPassword}
            />
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-primary" onClick={handleBackSingIn}>
          返回登入
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSingUp}>
          註冊
        </button>
      </div>
    </div>
  );
};

export default SingUp;
