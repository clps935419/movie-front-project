import { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import SessionInfo from "./components/SessionInfo";

export default function Seats(params) {
  const [seats, setSeats] = useState([]);
  useEffect(() => {
    setSeats(() => {
      for (var i=0; i<9; i++) {
        seats[i] = new Array(9)
      }
    })
  }, []);
  return (<>
    <Container>
      <SessionInfo />
      <Row className="my-3 border-bottom border-top">
        <Col md={4} style={{ backgroundColor: '#B7B7B7' }} className="text-center">
          <h4 className="pt-3 pb-1" style={{ letterSpacing: '10px' }}>選取座位</h4>
        </Col>
        <Col md={8} className="d-flex justify-content-end">
          {/* <Button variant="outline-secondary" size="sm" className="my-auto px-3 border h-50 d-flex"> */}
          <Link to="seats" className="btn btn-outline-secondary d-flex h-50 my-auto">
            <p className="caption1" style={{ lineHeight: '0.9' }}>確認訂單</p>
            <span className="material-icons-outlined" style={{ lineHeight: '0.5' }}>
              chevron_right
            </span>
          </Link>
          {/* </Button> */}
        </Col>
      </Row>
      <Container className="my-5">
        <h5 className="text-center">座位狀況</h5>
        <p className="mx-auto mt-2 w-75 text-end">
          <span className="material-symbols-outlined fs-6" style={{ color: '#00A886' }}>square</span>
          <span className="me-3 fs-6">選取</span>
          <span className="material-symbols-outlined fs-6" style={{ color: '#8C99AE' }}>square</span>
          <span className="fs-6">無法選取</span>
        </p>
        <p className="w-75 text-light text-center mx-auto caption1" style={{ backgroundColor: '#6F6F6F' }}>銀幕</p>
        <Card>
          {
            seats
          }
          {/* <button className="square" onClick={onSquareClick}>
              i
            </button> */}
        </Card>
      </Container>
    </Container>
  </>)
};
