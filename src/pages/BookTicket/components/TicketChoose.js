import { Col, Container, Form, Nav, Row, Table } from "react-bootstrap";

export default function TicketChoose(params) {
  return (<>
    <Container>
      <Row className="border">
        <Col md={4} className="bg-secondary"><h4>選取票種</h4></Col>
        <Col md={8}>已選取2張票：開始選位</Col>
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
      <Table hover className="mb-5">
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
            <td><Form.Select>
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
            <td><Form.Select>
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
            <td><Form.Select>
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
