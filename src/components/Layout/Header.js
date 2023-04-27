function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__logo">
          <a href="/home">CineK</a>
        </h1>
        <ul className="header__nav">
          <li>
            <a href="/movies">電影介紹</a>
          </li>
          <li>
            <a href="/theaters">影城介紹</a>
          </li>
          <li>
            <a href="/activity">活動介紹</a>
          </li>
        </ul>
        <div className="header__fast-btn">
          <button type="button " className="btn btn-customBtn1">
            快速訂票
          </button>
          <button type="button" className="btn btn-outline-customBtn1">
            會員登入
          </button>
        </div>
        <div className="header__hamburger-icon">
          <span></span>
        </div>
      </header>
    </>
  );
}
export default Header
