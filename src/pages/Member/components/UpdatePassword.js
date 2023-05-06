import { useState } from 'react';
import { useSelector } from 'react-redux';

import { selectAuth } from '@/store/slice/authSlice';
import { apiUser } from '@/api';

const initPassword = {
  password: '',
  passwordCheck: '',
};

const { updatePassword } = apiUser;

const UpdatePassword = () => {
  const { email } = useSelector(selectAuth);
  const [password, setPassword] = useState(initPassword);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setPassword((pre) => ({ ...pre, [id]: value }));
  };

  const handleSubmit = async () => {
    setErrorMessage('');
    try {
      const { data } = await updatePassword({ data: { ...password, email } });
      if (data.status === 'success') setPassword(initPassword);
    } catch (error) {
      console.error(error);
      if (!!error.response.data.errors)
        setErrorMessage(error.response.data.errors.map((item) => item.msg).join('\r\n'));
      if (!!error.response.data.message) setErrorMessage(error.response.data.message);
    }
  };

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          電子信箱
        </label>
        <input type="email" className="form-control" autoComplete="off" disabled id="email" value={email} />
      </div>

      <div className="mb-3">
        <label htmlFor="password" className="form-label">
          密碼
        </label>
        <input
          type="password"
          className="form-control"
          id="password"
          value={password.password}
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="passwordCheck" className="form-label">
          確認密碼
        </label>
        <input
          type="password"
          className="form-control"
          id="passwordCheck"
          value={password.passwordCheck}
          onChange={handleChange}
        />
      </div>
      <p className="text-danger">{errorMessage}</p>
      <div className="d-flex justify-content-center">
        <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
          修改密碼
        </button>
      </div>
    </form>
  );
};

export default UpdatePassword;
