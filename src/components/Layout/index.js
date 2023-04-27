import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";
import clsx from "clsx";

function Layout() {
  const { pathname } = useLocation();
  const noPdTopListArr = ["/home"]; //首頁header有蓋住內容，所以有蓋住內容的樣式統一這邊設定
  return (
    <div className="wrapper">
      <Header />
      <div
        className={clsx("content", {
          noPdTop: noPdTopListArr.includes(pathname),
        })}
      >
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
export default Layout;
