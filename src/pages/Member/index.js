import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuth } from '@/store/slice/authSlice';
import EditMember from './components/EditMember';
import UpdatePassword from './components/UpdatePassword';

const Member = () => {
  const navigate = useNavigate();
  const { token, email } = useSelector(selectAuth);
  const [isUpdatePassword, setIsUpdatePassword] = useState(false);

  useEffect(() => {
    if (!!!token || !!!email) navigate('/');
  }, [token, email, navigate]);

  return (
    <div className="container">
      <h1 className="text-center">會員中心</h1>
      {isUpdatePassword ? (
        <div className="text-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              setIsUpdatePassword(false);
            }}
          >
            返回會員資料
          </button>
        </div>
      ) : (
        <div className="text-end">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              setIsUpdatePassword(true);
            }}
          >
            修改密碼
          </button>
        </div>
      )}
      {isUpdatePassword ? <UpdatePassword /> : <EditMember />}
    </div>
  );
};

export default Member;
