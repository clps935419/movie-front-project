import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  selectCurrentChooseSeatArr,
  selectCurrentTicketIdArr,
  selectCurrentTicketTotalPrice,
} from "../../store/slice/ticketsSlice";
import { apiTicket } from "../../api";
import EcpayOrderBuilder from "./components/EcPayOrderBuilder";
//須送API資料
// {
// 	"sessionId":"",
// 	"ticketTypeIds":["",""],
//   "seats": [
//     {
//       "col": 8,
//       "row": 7
//     },
//     {
//       "col": 8,
//       "row": 8
//     }
//   ],
//   "price": 1000
// }

const { hashBookInfo } = apiTicket;

export default function TicketConfirm(params) {
  const { sessionId } = useParams();
  const [isBtnDisabled, setIsBtnDisabled] = useState(true);
  const ticketIdArr = useSelector(selectCurrentTicketIdArr);
  const totalPrice = useSelector(selectCurrentTicketTotalPrice);
  const seatsArr = useSelector(selectCurrentChooseSeatArr);
  const [ecpayData,setEcpayData] = useState({});
  const [isGoEcpay,setIsGoEcpay] = useState(false);
  console.log(
    "🚀 ~ file: TicketConfirm.js:27 ~ TicketConfirm ~ ticketIdArr:",
    ticketIdArr,
    totalPrice
  );

  async function handleSubmit() {
    try {
      const {
        data: { data },
      } = await hashBookInfo({
        data: {
          sessionId,
          ticketTypeIds: ticketIdArr,
          price: totalPrice,
          seats: seatsArr,
        },
      });
      console.log("🚀 ~ file: TicketConfirm.js:42 ~ handleSubmit ~ res:", data);
      setEcpayData(data);
      setIsGoEcpay(true);
    } catch (error) {
      setIsGoEcpay(false);
      console.log(
        "🚀 ~ file: TicketConfirm.js:45 ~ handleSubmit ~ error:",
        error
      );
    }
  }

  return (
    <>
      <Container>
        <Row className="my-3 border-bottom border-top">
          <Col
            md={4}
            style={{ backgroundColor: "#B7B7B7" }}
            className="text-center"
          >
            <h4 className="pt-3 pb-1" style={{ letterSpacing: "10px" }}>
              付款方式
            </h4>
          </Col>
        </Row>
        <Form className="d-flex justify-content-center my-5">
          <Form.Check
            className="d-inline-block"
            type="checkbox"
            label="同意使用條款"
            onChange={(e) => setIsBtnDisabled(!e.target.checked)}
          />
        </Form>
        <Container className="text-center mb-5">
          <Button
            variant="secondary"
            size="sm"
            disabled={isBtnDisabled}
            className="w-25"
            onClick={handleSubmit}
          >
            前往付款
          </Button>
        </Container>
      </Container>
      <EcpayOrderBuilder postData={ecpayData} isGoEcpay={isGoEcpay} />
    </>
  );
}
