import { Link, useNavigate, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { selectAuth } from '@/store/slice/authSlice';
import MemberDropDown from './MemberDropDown';
import { setIsShowHamburgerMenu } from '@/store/slice/publicSlice';

function Header({ openLoginModal }) {
  const authStore = useSelector(selectAuth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
  function handleNavToMovie(){
    navigate("/movies");
  }
  return (
    <>
      <header className="header">
        <h1 className="header__logo">
          <Link to="/home">CineK</Link>
        </h1>
        <ul className="header__nav">
          <li>
            <NavLink to="/movies" activeClassName="active">
              電影介紹
            </NavLink>
          </li>
          <li>
            <NavLink to="/theaters" activeClassName="active">
              影城介紹
            </NavLink>
          </li>
          <li>
            <NavLink to="/activity" activeClassName="active">
              活動介紹
            </NavLink>
          </li>
        </ul>
        <div className="header__fast-btn">
          <button
            type="button "
            className="btn btn-customBtn1"
            onClick={handleNavToMovie}
          >
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
