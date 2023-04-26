
function Footer(){
  return (
    <>
      <footer className="footer">
        <div className="footer__logo"></div>
        <ul className="footer__nav">
          <li>
            <a href="/movies">影城資訊</a>
          </li>
          <li>
            <a href="/theaters">會員資訊</a>
          </li>
          <li>
            <a href="/activity">關於我們</a>
          </li>
          <li>
            <a href="/activity">徵才資訊</a>
          </li>
          <li>
            <a href="/activity">常見問題 </a>
          </li>
        </ul>
        <div>Copyright © 2023 CineK影城</div>
      </footer>
    </>
  );
}
export default Footer;