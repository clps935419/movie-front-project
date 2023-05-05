import { useState, useContext } from 'react';
import { apiUser } from '@/api';
import LoginContext from './store/LoginContext';

const { postRecoverPassword } = apiUser;
const RecoverPassword = ({ closeModal }) => {
  const context = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async () => {
    await postRecoverPassword({ data: { email } })
      .then(({ data }) => {
        if (data.status === 'success') {
          setMessage('送出新密碼至信箱');
        }
      })
      .catch(({ response }) => setMessage(response.data.message));
  };

  const handleBackSignIn = () => {
    context.changeSignIn();
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
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
        <p className="text-danger">{message}</p>
      </div>

      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={handleBackSignIn}>
          返回登入
        </button>
        <button type="button" className="btn btn-primary" onClick={handleSubmit}>
          送出
        </button>
      </div>
    </div>
  );
};

export default RecoverPassword;
