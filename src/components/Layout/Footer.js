import { Link, link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as ArrowBtn } from "@/assets/icons/expand_less_black_24dp 1.svg";

const FooterWrapper = styled.div`
  position: relative;
`;

const GoTopBtn = styled.button`
  position: absolute;
  top: -24px;
  right:10%;
  width: 48px;
  height: 48px;
  background: #31e2ce;
  border-radius: 50%;
  border: none;
`;

function Footer() {
  function handleGoTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <>
      <FooterWrapper className="footer">
        <GoTopBtn onClick={handleGoTop}>
          <ArrowBtn />
        </GoTopBtn>
        <div className="footer__logo">
          <Link to="/home">CineK</Link>
        </div>
        <ul className="footer__nav">
          <li>
            <Link to="/movies">影城資訊</Link>
          </li>
          <li>
            <Link to="/theaters">會員資訊</Link>
          </li>
          <li>
            <Link to="/activity">關於我們</Link>
          </li>
          <li>
            <Link to="/activity">徵才資訊</Link>
          </li>
          <li>
            <Link to="/activity">常見問題</Link>
          </li>
        </ul>
        <div>Copyright © 2023 CineK影城</div>
      </FooterWrapper>
    </>
  );
}
export default Footer;
