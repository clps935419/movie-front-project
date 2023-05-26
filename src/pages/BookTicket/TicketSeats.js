import { apiTicket } from "@/api";
import { useEffect, useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import SessionInfo from "./components/SessionInfo";


const { getSessionTicketSeats } = apiTicket;
export default function TicketSeats(params) {
  const { sessionId } = useParams();
  const [seats, setSeats] = useState([]);
  // const ticketInfo = useMemo(() => {
  //   //! 從redux拿出資料
  //   const sample = [
  //     {
  //       _id: '646e40af0aa2b666bd98e847',
  //       type: '套票',
  //       name: '雙人吉拿套票',
  //       price: 740,
  //       content: '內含:電影票 X 2, 70元飲料 X 2, 大爆米花 X 1, 吉拿棒 X 1',
  //       ticketCount: 2,
  //       buyCount: '2'
  //     },
  //     {
  //       _id: '646e40af0aa2b666bd98e848',
  //       type: '套票',
  //       name: '吉拿套票',
  //       price: 370,
  //       content: '內含:電影票 X 1, 70元飲料 X 1, 吉拿棒 X 1',
  //       ticketCount: 1,
  //       buyCount: '1'
  //     }
  //   ]
  //   return {
  //     rowCount: sample.map(item => {
  //       return item.price * item.buyCount
  //     }).reduce((accumulator, currentValue) => { return accumulator + currentValue }),
  //     colCount: sample.map(item => {
  //       return item.price * item.buyCount
  //     }).reduce((accumulator, currentValue) => { return accumulator + currentValue }),
  //   }
  // }, [])
  const seatRows = Array.from({ length: 16 }, (v, i) => i);
  const seatCols = Array.from({ length: 10 }, (v, i) => i);
  useEffect(() => {
    (async () => {
      const res = await getSessionTicketSeats()
        .then(({ data }) => {
          if (data.status === 'success') {
            console.log('data:', data)
            setSeats(data.data);
          }
        })
        .catch(({ response }) => {
          throw new Error(response.data.errors[0].msg || response.data.message);
        });
      console.log('res:', res)
    })();
    // setSeats(() => {
    //   for (var i = 0; i < 9; i++) {
    //     seats[i] = new Array(9)
    //   }
    // })
  }, []);
  function checkForSale(x, y) {
    const result = seats.find((item) => item.x === x && item.y === y);
    if (!result) return true;
    return result.isForSale;
  }
  function checkChoosed(x, y) {
    const index = seats.findIndex((item) => item.x === x && item.y === y);
    if (index === -1) return false;
    // seats[index].isChoosed = !seats[index].isChoosed;
    return seats[index].isChoosed;
  }
  function handleChooseSeat(x, y) {
    const index = seats.findIndex((item) => item.x === x && item.y === y);
    console.log("index:", index, x, y);
    if (index === -1) return;
    console.log("choosed1:", x, y, seats[index].isChoosed);
    setSeats((item) => {
      item[index].isChoosed = !item[index].isChoosed;
    });
    console.log("choosed2:", x, y, seats[index].isChoosed);
  }
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
            width: "30px",
            height: "30px",
            margin: "2px",
            fontSize: "10px",
            backgroundColor: `${checkChoosed(seatRow, seatCol) ? "red" : "white"
              }`,
            visibility: `${seatCol === 3 || seatRow === 5 || seatRow === 9
              ? "hidden"
              : "visible"
              }`
          }}
          onClick={() => {
            handleChooseSeat(seatCol, seatRow);
          }}
        >
        </button>
      ))
      }
    </div>
  ));
  return (<>
    <Container>
      <SessionInfo />
      <Row className="my-3 border-bottom border-top">
        <Col md={4} style={{ backgroundColor: '#B7B7B7' }} className="text-center">
          <h4 className="pt-3 pb-1" style={{ letterSpacing: '10px' }}>選取座位</h4>
        </Col>
        <Col md={8} className="d-flex justify-content-end">
          <Link to={`/ticket/${sessionId}/confirm`} className="btn btn-outline-secondary d-flex h-50 my-auto">
            <p className="caption1" style={{ lineHeight: '0.9' }}>確認訂單</p>
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
          {
            seatsPicker
          }
        </Container>
      </Container>
    </Container>
  </>)
};
