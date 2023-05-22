import React from 'react';
import { useDispatch } from 'react-redux';
import { clearAuth } from '@/store/slice/authSlice';
import Dropdown from 'react-bootstrap/Dropdown';

import '@/assets/scss/member/dropdown.scss';

const MemberDropDown = () => {
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(clearAuth());
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="primary">會員中心</Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item href="#/member">個人資料</Dropdown.Item>
        <Dropdown.Item href="#/member/purchaseRecord">購票紀錄</Dropdown.Item>
        <Dropdown.Item href="#/member/bonusRecord">紅利點數</Dropdown.Item>
        <Dropdown.Item onClick={handleSignOut}>會員登出</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default MemberDropDown;
