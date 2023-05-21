import styled from "styled-components";
import logo from "@/assets/image/logo.png";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectAuth, clearAuth } from "@/store/slice/authSlice";
import { setIsShowHamburgerMenu } from "../../store/slice/publicSlice";
import { ReactComponent as CloseBtn } from "@/assets/icons/close-line 1.svg";

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: #ffffff;
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1030; //$zindex-fixed:
`;
const NavWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-top: 72px;
  padding-bottom: 32px;
`;

const MyNav = styled(Link)`
  font-weight: bolder;
  font-size: 16px;
  line-height: 24px;
  color: #3d3d3d;
  text-decoration: none;
`;
const BtnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const MyCloseBtn = styled(CloseBtn)`
  position: absolute;
  top: 21px;
  right: 21px;
  z-index: 1031;
  cursor: pointer;
`;

function HamburgerMenu({ openLoginModal }) {
  const dispatch = useDispatch();
  const authStore = useSelector(selectAuth);
  const handleSignOut = () => {
    dispatch(clearAuth());
  };

  const loginButton = !!authStore.token ? (
    <button
      type="button"
      className="btn btn-outline-customBtn1"
      onClick={handleSignOut}
    >
      會員登出
    </button>
  ) : (
    <button
      type="button"
      className="btn btn-outline-customBtn1"
      onClick={openLoginModal}
    >
      會員登入
    </button>
  );
  function handleHamburgerMenu() {
    dispatch(setIsShowHamburgerMenu(false));
  }

  return (
    <Wrapper>
      <img src={logo} alt="Logo" width="110" />
      <MyCloseBtn onClick={handleHamburgerMenu} />
      <NavWrapper>
        <MyNav to="/movies">電影介紹</MyNav>
        <MyNav to="/theaters">影城介紹</MyNav>
        <MyNav to="/activity">活動介紹</MyNav>
      </NavWrapper>
      <BtnWrapper>
        <button type="button " className="btn btn-customBtn1">
          快速訂票
        </button>
        {loginButton}
      </BtnWrapper>
    </Wrapper>
  );
}
export default HamburgerMenu;
