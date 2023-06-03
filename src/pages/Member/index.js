import { Outlet, useLocation } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import '@/assets/scss/member/navTab.scss';
import styled from 'styled-components';

const HeaderImg = styled.div`
  height: 287px;
  width: 100%;
  margin-bottom: 120px;
  background: url('https://s3-alpha-sig.figma.com/img/0746/7826/d66997a7eb0caad9ab19c2dc72a69623?Expires=1685923200&Signature=ICakUf79-8EeW-jtcoF4SmXhycSWmPV3F1vY-pUoXJg9s1UCtcmhK08fRfhX0Kj7Dd-Nt2BilCv7ZaoZ3e~RCWipEsFfHFOx84ZYEUXlHM8Fu01DXgbSp0cO~OSpDcs-81jY5T~cCcn7M9z6hY4PfUJUAKmdT5TDyFOi1lit8OMiLNecb4XBvPJ2uCYbELekjDQQRlMpPbOu0pJSiranfGK1kNCJg-uYlTOFpB9TPhuqxIVVLWSxckTEIjYs0QoA4vMgKXMG7kvKx3c0tPgpk6Wx2HfhVFQ558Kx9VGwdNClk3OJF3oOPFEulap~LVVY1FdbM8zIsc9XByd7s-42mg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4')
    no-repeat center;
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
      <div className="container">
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
