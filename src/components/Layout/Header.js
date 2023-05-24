import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '@/store/slice/authSlice';
import MemberDropDown from './MemberDropDown';
import { setIsShowHamburgerMenu } from '@/store/slice/publicSlice';

function Header({ openLoginModal }) {
  const authStore = useSelector(selectAuth);
  const dispatch = useDispatch();

  const loginButton = !!authStore.token ? (
    <MemberDropDown />
  ) : (
    <button type="button" className="btn btn-outline-customBtn1" onClick={openLoginModal}>
      會員登入
    </button>
  );

  function handleHamburgerMenu() {
    dispatch(setIsShowHamburgerMenu(true));
  }
  return (
    <>
      <header className="header">
        <h1 className="header__logo">
          <Link to="/home">CineK</Link>
        </h1>
        <ul className="header__nav">
          <li>
            <Link to="/movies">電影介紹</Link>
          </li>
          <li>
            <Link to="/theaters">影城介紹</Link>
          </li>
          <li>
            <Link to="/activity">活動介紹</Link>
          </li>
        </ul>
        <div className="header__fast-btn">
          <button type="button " className="btn btn-customBtn1">
            快速訂票
          </button>
          {loginButton}
        </div>
        <div className="header__hamburger-icon" onClick={handleHamburgerMenu}>
          <span></span>
        </div>
      </header>
    </>
  );
}
export default Header;
