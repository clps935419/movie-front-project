import { apiTicket } from "@/api";
import { selectCurrentTicketTotalCount, setTicketsSeats } from "@/store/slice/ticketsSlice";
import _ from "lodash";
import { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router';
import { useParams } from "react-router-dom";
import NoticeModal from "./components/NoticeModal";

const { getSessionTicketSeats, checkSeats } = apiTicket;
export default function TicketSeats() {
  const dispatch = useDispatch();
  const { sessionId } = useParams();
  const [origSeats, setOrigSeats] = useState([]);
  const [seats, setSeats] = useState([]);
  const [matrixRange, setMatrixRange] = useState([0, 0]);
  const [seatChoosed, setSeatChoosed] = useState([]);
  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({ title: '', content: '' });
  const [rechooseSeat, setRechooseSeat] = useState(false);
  const currentTicketTotalCount = useSelector(selectCurrentTicketTotalCount);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      await getSessionTicketSeats({ params: { id: sessionId } })
        .then(({ data }) => {
          if (data.status === 'success') {
            setOrigSeats(data.data);
          } else {
            navigate(`/ticket/${sessionId}`);
          }
        })
        .catch((error) => {
          console.log('TicketSeats.js error:', error);
          navigate(`/ticket/${sessionId}`);
        });
    })();
    if (!sessionStorage.getItem("currentChooseTickets")) navigate(`/ticket/${sessionId}`);
  }, [sessionId, rechooseSeat, navigate]);
  useEffect(() => {
    setSeats(origSeats.map(element => {
      element["isChecked"] = false;
      return element
    }));
    if (origSeats.length > 0) {
      setMatrixRange([origSeats[origSeats.length - 1].x, origSeats[origSeats.length - 1].y]);
    }
  }, [origSeats])
  const seatRows = Array.from({ length: matrixRange[0] }, (v, i) => i);
  const seatCols = Array.from({ length: matrixRange[1] }, (v, i) => i);
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
  function handleChooseSeat(x, y, event) {
    event.stopPropagation();
    const index = seats.findIndex(item => item.x === x && item.y === y);
    if (index === -1) return
    // 超過選取上限
    if (seatChoosed.length === currentTicketTotalCount && !seatChoosed.find(item => item.x === x && item.y === y)) {
      setModalContent({ title: '超過座位選取上限', content: '座位選取數量已達上限，要先取消部分位子才能重新選擇新的位子。' })
      setShow(true)
    } else if (seatChoosed.find(item => item.x === x && item.y === y)) {
      let newSeats = _.cloneDeep(seats);
      newSeats[index].isChecked = false;
      setSeats(newSeats);
      const itemIndex = seatChoosed.findIndex(item => item.x === x && item.y === y);
      setSeatChoosed(item => item.filter((_, index) => index !== itemIndex));
    } else {
      let newSeats = _.cloneDeep(seats);
      newSeats[index].isChecked = true;
      setSeats(newSeats);
      setSeatChoosed(item => [...item, { x, y }])
    }
  }
  useEffect(() => {
    const result = seatChoosed.map(item => {
      const temp = seats.find(element => element.x === item.x && element.y === item.y)
      return temp
    });
    dispatch(setTicketsSeats(result));
  }, [seatChoosed, dispatch, seats])
  const seatsPicker = seatCols.map((seatCol) => (
    <div
      key={`seatCol-${seatCol}`}
      style={{
        display: "flex",
        justifyContent: "center",
      }}
      onClick={(event) => { event.preventDefault() }}
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
          onClick={(event) => {
            handleChooseSeat(seatRow, seatCol, event);
          }}
        >
        </button>
      ))
      }
    </div>
  ));
  async function handleSeatsCheckAvailable() {
    const body = {
      ticketCount: seatChoosed.length,
      seats: seatChoosed.map(item => {
        const temp = seats.find(element => element.x === item.x && element.y === item.y)
        return {
          row: temp.row,
          col: temp.col
        }
      })
    }
    // console.log('body:', body);
    await checkSeats({ sessionId, body })
      .then(({ data }) => {
        console.log('data:', data);
        if (data.status === 'success' && data.data.unAvailable.length === 0) {
          console.log('data1:', data);
          navigate(`/ticket/${sessionId}/confirm`);
        } else if (data.status === 'success') {
          setModalContent({ title: '座位已被選取', content: '座位已被選取，請重新選擇座位。' })
          setShow(true)
          setRechooseSeat(true);
          navigate(`/ticket/${sessionId}/seats`);
          console.log('data2:', data);
        }
      })
      .catch((error) => {
        console.log('TicketSeats.js error:', error)
      });
  }
  return (<>
    <Container>
      <Row className="my-3 border-bottom border-top">
        <Col md={4} style={{ backgroundColor: '#B7B7B7' }} className="text-center">
          <h4 className="pt-3 pb-1" style={{ letterSpacing: '10px' }}>選取座位</h4>
        </Col>
        <Col md={8} className="d-flex justify-content-end">
          <Button onClick={handleSeatsCheckAvailable} variant="outline-secondary" disabled={seatChoosed.length !== currentTicketTotalCount} size="sm" className="d-flex justify-content-center w-25 h-50 my-auto">
            <p className="caption1 mt-1" style={{ lineHeight: '0.9' }}>{seatChoosed.length === currentTicketTotalCount ? "確認訂單" : `還剩${currentTicketTotalCount - seatChoosed.length}座位需選取`}</p>
            <span className="material-icons-outlined mt-1" style={{ lineHeight: '0.5' }}>
              chevron_right
            </span>
          </Button>
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
          <NoticeModal show={show}
            onHide={() => setShow(false)}
            modalContent={modalContent} />
          {
            seatsPicker
          }
        </Container>
      </Container>
    </Container>
  </>)
};
