import { Col, Container, Form, Row } from "react-bootstrap";
import AreaTime from "./AreaTime";

export default function TimeTable(params) {
  return (<>
    <Container className="mb-5">
      <Form className="mb-5">
        <Row>
          <Col xs={6} md={5}>
            <Form.Group className="">
              <Form.Select>
                <option>選擇日期</option>
                <option value="2023/02/10">2023/02/10 星期日</option>
                <option value="2023/02/11">2023/02/11 星期一</option>
                <option value="2023/02/12">2023/02/12 星期二</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={6} md={3}>
            <Form.Group>
              <Form.Select>
                <option>選擇區域</option>
                <option value="2023/02/10">全部影城</option>
                <option value="2023/02/11">高雄影城</option>
                <option value="2023/02/12">台南影城</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>
      </Form>
      <AreaTime />
      <hr className="my-5" />
      <AreaTime />
      <hr className="my-5" />
      <AreaTime />
      <hr className="my-5" />
    </Container>
  </>)
};
