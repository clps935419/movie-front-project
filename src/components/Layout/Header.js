import { Link, link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { clearAuth } from '@/store/slice/authSlice';

function Header({ openloginModal }) {
  const authStore = useSelector((store) => store['movie-app'].authReducer.auth);
  const dispatch = useDispatch();

  const handleSingout = () => {
    dispatch(clearAuth());
  };

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
          {authStore.token === '' ? (
            <button type="button" className="btn btn-outline-customBtn1" onClick={openloginModal}>
              會員登入
            </button>
          ) : (
            <button type="button" className="btn btn-outline-customBtn1" onClick={handleSingout}>
              會員登出
            </button>
          )}
        </div>
        <div className="header__hamburger-icon">
          <span></span>
        </div>
      </header>
    </>
  );
}
export default Header;
