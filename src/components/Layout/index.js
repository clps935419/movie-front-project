import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import LoginModal from '../Login/LoginModal';
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

import { Modal } from 'bootstrap';

function Layout() {
  const { pathname } = useLocation();
  const noPdTopListArr = ['/home']; //首頁header有蓋住內容，所以有蓋住內容的樣式統一這邊設定
  const modalRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      new Modal(modal).show();
      modal.addEventListener('hidden.bs.modal', () => {
        setIsOpenModal(false);
      });
    }
  }, [isOpenModal]);

  return (
    <div className="wrapper">
      <Header openLoginModal={openModal} />
      <div
        className={clsx('content', {
          noPdTop: noPdTopListArr.includes(pathname),
        })}
      >
        <Outlet />
        {isOpenModal && <LoginModal modalRef={modalRef} />}
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
