import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '@/assets/scss/member/navTab.scss';
import styled from 'styled-components';
import headerImgUrlMD from '@/assets/image/memberHeaderlg.png';
import headerImgUrl from '@/assets/image/memberHeader.png';

const HeaderImg = styled.div`
  height: 287px;
  width: 100%;
  margin-bottom: 72px;
  @media (min-width: 768px) {
    margin-bottom: 120px;
    background: url(${headerImgUrlMD}) no-repeat center;
  }
  background: url(${headerImgUrl}) no-repeat center;
  background-size: cover;
`;

const navItem = [
  { name: '個人資料', href: '#/member' },
  { name: '購票紀錄', href: '#/member/purchaseRecord' },
  { name: '紅利點數', href: '#/member/bonusRecord' },
];

const Member = () => {
  const location = useLocation();
  return (
    <>
      <HeaderImg />
      <div className="container-md container-fluid">
        <Nav variant="tabs" activeKey={`#${location.pathname}`} className="member">
          {navItem.map((item) => (
            <Nav.Item key={item.name}>
              <Nav.Link href={item.href}>{item.name}</Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        <Outlet />
      </div>
    </>
  );
};

export default Member;
export { default as UserInformation } from './UserInformation';
export { default as BonusRecord } from './BonusRecord';
export { default as PurchaseRecord } from './PurchaseRecord';
