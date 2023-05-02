import { Link, link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
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
      </footer>
    </>
  );
}
export default Footer;
