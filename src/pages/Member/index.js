import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectAuth } from '@/store/slice/authSlice';
import EditMember from './components/EditMember';

const Member = () => {
  const navigate = useNavigate();
  const { token } = useSelector(selectAuth);

  useEffect(() => {
    if (!!!token) navigate('/');
  }, [token, navigate]);

  return (
    <div className="container">
      <h1 className="text-center">會員中心</h1>
      <EditMember />
    </div>
  );
};

export default Member;
