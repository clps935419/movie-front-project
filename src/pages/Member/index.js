import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '@/assets/scss/member/navTab.scss';

const Member = () => {
  const location = useLocation();
  return (
    <div className="container">
      <Nav variant="tabs" className="member" defaultActiveKey={`#${location.pathname}`}>
        <Nav.Item>
          <Nav.Link href="#/member">個人資料</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/member/purchaseRecord">購票紀錄</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#/member/bonusRecord">紅利點數</Nav.Link>
        </Nav.Item>
      </Nav>

      <Outlet />
    </div>
  );
};

export default Member;
export { default as UserInformation } from './UserInformation';
export { default as BonusRecord } from './BonusRecord';
export { default as PurchaseRecord } from './PurchaseRecord';
