function Header() {
  return (
    <>
      <header className="header">
        <h1 className="header__logo">
          <a href="">CineK</a>
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
          <button type="button " class="btn btn-primary">
            <a href="" className="fs-6">
              快速訂票
            </a>
          </button>
          <button type="button" class="btn btn-outline-secondary">
            <a href="" className="fs-6">
              會員登入
            </a>
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
