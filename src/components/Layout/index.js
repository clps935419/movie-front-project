import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="wrapper">
      <h1>layout</h1>
      <Outlet />
    </div>
  );
}
export default Layout;
