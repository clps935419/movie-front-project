import { apiTicket } from "@/api";
import { selectCurrentTicketTotalCount, setTicketsSeats } from "@/store/slice/ticketsSlice";
import { useEffect, useState } from 'react';
import { Alert, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const { getSessionTicketSeats } = apiTicket;
export default function TicketSeats(params) {
  const dispatch = useDispatch();
  const { sessionId } = useParams();
  const [origSeats, setOrigSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [seatChoosed, setSeatChoosed] = useState([]);
  const [show, setShow] = useState(false);
  const currentTicketTotalCount = useSelector(selectCurrentTicketTotalCount);
  useEffect(() => {
    (async () => {
      await getSessionTicketSeats({ params: { id: sessionId } })
        .then(({ data }) => {
          if (data.status === 'success') {
            setOrigSeats(data.data);
          }
        })
        .catch((error) => {
          console.log('TicketSeats.js error:', error)
        });
    })();
  }, [sessionId]);
  useEffect(() => {
    setSeats(origSeats.map(element => {
      element["isChecked"] = false
      return element
    }));
  }, [origSeats])
  // console.log('seats:', seats)
  // const maxSeatRow = seats[seats.length - 1];
  // const maxSeatCol = seats[seats.length - 1];
  // console.log('row', maxSeatRow.y, ' col', maxSeatCol.x);
  const seatRows = Array.from({ length: 15 }, (v, i) => i);
  const seatCols = Array.from({ length: 20 }, (v, i) => i);
  function checkForSale(x, y) {
    const result = seats.find((item) => item.x === x && item.y === y);
    if (result && !result.isSold && result.situation === "可販售") return true;
    return false
  }
  function checkChoosed(x, y) {
    const result = seats.find((item) => item.x === x && item.y === y);
    if (!result) return false
    return result.isChecked
  }
  function handleChooseSeat(x, y) {
    const index = seats.findIndex(item => item.x === x && item.y === y);
    if (index === -1) return
    // 超過選取上限
    if (seatChoosed.length === currentTicketTotalCount && !seatChoosed.find(item => item.x === x && item.y === y)) {
      setShow(true)
    } else if (seatChoosed.find(item => item.x === x && item.y === y)) {
      seats[index].isChecked = false;
      const itemIndex = seatChoosed.findIndex(item => item.x === x && item.y === y);
      setSeatChoosed(item => item.filter((_, index) => index !== itemIndex));
    } else {
      seats[index].isChecked = true
      setSeatChoosed(item => [...item, { x, y }])
    }
  }
  useEffect(() => {
    const result = seatChoosed.map(item => {
      const temp = seats.find(element => element.x === item.x && element.y === item.y)
      return temp
    });
    dispatch(setTicketsSeats(result));
  }, [seatChoosed])
  const seatsPicker = seatCols.map((seatCol) => (
    <div
      key={`seatCol-${seatCol}`}
      style={{
        display: "flex",
        justifyContent: "center"
      }}
    >
      {seatRows.map((seatRow) => (
        <button
          type="button"
          key={`Col-${seatCol}-Row-${seatRow}`}
          disabled={!checkForSale(seatRow, seatCol)}
          style={{
            width: "20px",
            height: "20px",
            margin: "3px 7px",
            fontSize: "10px",
            backgroundColor: `${!checkForSale(seatRow, seatCol) ? '#8C99AE' : checkChoosed(seatRow, seatCol) ? "#00A886" : "white"
              }`,
            visibility: `${seats.find(item => item.x === seatRow && item.y === seatCol)
              ? "visible"
              : "hidden"
              }`
          }}
          onClick={() => {
            handleChooseSeat(seatRow, seatCol);
          }}
        >
        </button>
      ))
      }
    </div>
  ));
  return (<>
    <Container>
      <Row className="my-3 border-bottom border-top">
        <Col md={4} style={{ backgroundColor: '#B7B7B7' }} className="text-center">
          <h4 className="pt-3 pb-1" style={{ letterSpacing: '10px' }}>選取座位</h4>
        </Col>
        <Col md={8} className="d-flex justify-content-end">
          <Link style={{ pointerEvents: seatChoosed.length === currentTicketTotalCount ? '' : 'none' }} activeclassname="active" to={`/ticket/${sessionId}/confirm`} className="btn btn-outline-secondary d-flex h-50 my-auto">
            <p className="caption1" style={{ lineHeight: '0.9' }}>{seatChoosed.length === currentTicketTotalCount ? "確認訂單" : `還剩${currentTicketTotalCount - seatChoosed.length}座位需選取`}</p>
            <span className="material-icons-outlined" style={{ lineHeight: '0.5' }}>
              chevron_right
            </span>
          </Link>
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
        <Container>
          {show && <Alert variant="danger" onClose={() => setShow(false)} dismissible className="mt-5 w-75 mx-auto">
            座位選取數量已達上限，要先取消部分位子才能重新選擇新的位子。
          </Alert>}
          {
            seatsPicker
          }
        </Container>
      </Container>
    </Container>
  </>)
};
