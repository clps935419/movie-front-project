import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '@/assets/scss/member/navTab.scss';

const navItem = [
  { name: '個人資料', href: '#/member' },
  { name: '購票紀錄', href: '#/member/purchaseRecord' },
  { name: '紅利點數', href: '#/member/bonusRecord' },
];

const Member = () => {
  const location = useLocation();
  return (
    <div className="container">
      <Nav variant="tabs" className="member">
        {navItem.map((item) => (
          <Nav.Item key={item.name}>
            <Nav.Link href={item.href} className={`${item.href === `#${location.pathname}` ? 'active' : ''}`}>
              {item.name}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      <Outlet />
    </div>
  );
};

export default Member;
export { default as UserInformation } from './UserInformation';
export { default as BonusRecord } from './BonusRecord';
export { default as PurchaseRecord } from './PurchaseRecord';
