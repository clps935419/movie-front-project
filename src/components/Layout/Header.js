import { Link, link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth, clearAuth } from '@/store/slice/authSlice';

function Header({ openLoginModal }) {
  const authStore = useSelector(selectAuth);
  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(clearAuth());
  };

  const loginButton = !!authStore.token ?
    (
      <button type="button" className="btn btn-outline-customBtn1" onClick={handleSignOut}>
        會員登出
      </button>
    ) :
    (
      <button type="button" className="btn btn-outline-customBtn1" onClick={openLoginModal}>
        會員登入
      </button>
    )

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
        <div className="header__hamburger-icon">
          <span></span>
        </div>
      </header>
    </>
  );
}
export default Header;
