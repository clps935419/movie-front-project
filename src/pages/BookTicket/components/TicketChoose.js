import { Button, Col, Container, Form, Nav, Row, Table } from "react-bootstrap";

export default function TicketChoose(params) {
  return (<>
    <Container>
      <Row className="my-3 border-bottom border-top">
        <Col md={4} style={{ backgroundColor: '#B7B7B7' }} className="text-center">
          <h4 className="pt-3 pb-1" style={{ letterSpacing: '10px' }}>選取票種</h4>
        </Col>
        <Col md={8} className="d-flex justify-content-end">
          {/* <button className="btn btn-outline-secondary py-1 px-3 mt-2">
            <span className="border">已選取2張票：開始選位</span>
            <span className="material-icons-outlined border">
              chevron_right
            </span>
          </button> */}
          <Button variant="outline-secondary" size="sm" className="my-auto px-3 border h-50 d-flex">
            <p className="mb-0 caption1 py-auto">已選取2張票：開始選位</p>
            <span className="material-icons-outlined" style={{ lineHeight: '0.9' }}>
              chevron_right
            </span>
          </Button>
        </Col>
      </Row>
      <Nav variant="pills" defaultActiveKey="link-0" className="mt-2 mb-5">
        <Nav.Item>
          <Nav.Link eventKey="link-0">套票</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">電影票</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">團體票</Nav.Link>
        </Nav.Item>
      </Nav>
      <Table hover className="mb-5" responsive="sm">
        <thead>
          <tr>
            <th>票種</th>
            <th>單價</th>
            <th>數量</th>
            <th>小記</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><p>雙人吉拿套票</p><p>內含:電影票 X 2, 70元飲料 X 2, 大爆米花 X 1, 吉拿棒 X 1</p></td>
            <td>$740</td>
            <td><Form.Select style={{ width: '80px' }}>
              <option>數量</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select></td>
            <td>$740</td>
          </tr>
          <tr>
            <td><p>雙人吉拿套票</p><p>內含:電影票 X 2, 70元飲料 X 2, 大爆米花 X 1, 吉拿棒 X 1</p></td>
            <td>$740</td>
            <td><Form.Select style={{ width: '80px' }}>
              <option>數量</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select></td>
            <td>$740</td>
          </tr>
          <tr>
            <td><p>雙人吉拿套票</p><p>內含:電影票 X 2, 70元飲料 X 2, 大爆米花 X 1, 吉拿棒 X 1</p></td>
            <td>$740</td>
            <td><Form.Select style={{ width: '80px' }}>
              <option>數量</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </Form.Select></td>
            <td>$740</td>
          </tr>
        </tbody>
      </Table>
    </Container>
  </>)
};
