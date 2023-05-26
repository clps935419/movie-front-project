import { Button, Col, Container, Form, Row } from "react-bootstrap"
import SessionInfo from "./components/SessionInfo"

export default function TicketConfirm(params) {
  return (<>
    <Container>
      <SessionInfo />
      <Row className="my-3 border-bottom border-top">
        <Col md={4} style={{ backgroundColor: '#B7B7B7' }} className="text-center">
          <h4 className="pt-3 pb-1" style={{ letterSpacing: '10px' }}>付款方式</h4>
        </Col>
        {/* <Col md={8} className="d-flex justify-content-end">
          
        </Col> */}
      </Row>
      <Form className="d-flex justify-content-center my-5">
        <Form.Check
          className="d-inline-block"
          type="checkbox"
          label="同意使用條款"
        />
      </Form>
      <Container className="text-center mb-5">
        <Button variant="secondary" size="sm" disabled className="w-25">前往付款</Button>
      </Container>
    </Container></>)
};
