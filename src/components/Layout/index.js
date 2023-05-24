import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import LoginModal from '../Login/LoginModal';
import Footer from './Footer';
import Header from './Header';

import { Modal } from "bootstrap";
import { useSelector } from "react-redux";
import { selectIsShowHamburgerMenu } from "../../store/slice/publicSlice";
import HamburgerMenu from "./HamburgerMenu";

function Layout() {
  const modalRef = useRef(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const isShowHamburgerMenu = useSelector(selectIsShowHamburgerMenu);

  const openModal = () => {
    setIsOpenModal(true);
  };

  useEffect(() => {
    const modal = modalRef.current;
    if (modal) {
      new Modal(modal).show();
      modal.addEventListener("hidden.bs.modal", () => {
        setIsOpenModal(false);
      });
    }
  }, [isOpenModal]);

  return (
    <div className="wrapper">
      <Header openLoginModal={openModal} />
      <div className="content">
        <Outlet />
        {isOpenModal && <LoginModal modalRef={modalRef} />}
      </div>
      <Footer />
      {isShowHamburgerMenu && <HamburgerMenu openLoginModal={openModal} />}
    </div>
  );
}
export default Layout;
