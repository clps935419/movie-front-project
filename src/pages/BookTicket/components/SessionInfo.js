import { selectCurrentChooseSeatArr, selectCurrentTicketDetailsArr, selectCurrentTicketTotalPrice, selectCurrentTicketTypesArr, selectTicketInfo, setCurrentChooseTickets } from "@/store/slice/ticketsSlice";
import _ from 'lodash';
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

export default function SessionInfo(params) {
  const myTicketInfo = useSelector(selectTicketInfo);
  const myTicketTypeArr = useSelector(selectCurrentTicketTypesArr);
  const myTicketContent = useSelector(selectCurrentTicketDetailsArr);
  const myTicketTotalPrice = useSelector(selectCurrentTicketTotalPrice);
  const seatsArr = useSelector(selectCurrentChooseSeatArr);
  const dispatch = useDispatch();
  const {
    imgUrl,
    movieCName,
    movieENam,
    rating,
    dateTime,
    theaterName,
    room,
    currentChooseTickets
  } = myTicketInfo;
  if (_.isEmpty(currentChooseTickets)) {
    dispatch(setCurrentChooseTickets(JSON.parse(sessionStorage.getItem("currentChooseTickets"))));
  }
  const ticketTypesEle = myTicketTypeArr.map((item) => {
    return <div key={item}>{item}</div>;
  });
  const ticketDetailsEle = myTicketContent.map((item) => {
    return <div key={item}>{item}</div>;
  });
  const seatEle = seatsArr
    .map((item, index) => {
      const { row, col } = item;
      return <div key={`${row}-${col}`}>{index !== 0 && <span>,</span>}{`${row}排 ${col}號`}</div>;
    });

  return (
    <>
      {!_.isEmpty(myTicketInfo.imgUrl) && (<Container>
        <Row>
          <Col xs={12} md={4}>
            <img className="img-fluid" src={imgUrl} alt={movieCName} />
          </Col>
          <Col xs={12} md={8} className="fs-6 pt-sm-2 pt-md-0">
            <h1 className="card-title">{movieCName}</h1>
            <p className="fs-3 card-subtitle mb-2 text-muted">{movieENam}</p>
            <Badge
              bg="customBadgeYellow"
              text="dark"
              pill
              className="mb-3 caption1"
            >
              {rating}
            </Badge>
            <p>
              地點： {theaterName}
              {room}
            </p>
            <p>開演時間： {dateTime}</p>
            <hr />
            <p className="d-flex gap-1">
              <span style={{ whiteSpace: "nowrap" }}>票種：</span>
              <div>{ticketTypesEle}</div>
            </p>
            <p className="d-flex gap-1">
              <span style={{ whiteSpace: "nowrap" }}>明細：</span>
              <div>{ticketDetailsEle}</div>
            </p>
            <p className="d-flex gap-1">
              <span style={{ whiteSpace: "nowrap" }}>座位：</span>
              <div className="d-flex">{seatEle}</div>
            </p>
            <hr />
            <p className="d-flex gap-1">
              <span style={{ whiteSpace: "nowrap" }}>總計：</span>
              <span>${myTicketTotalPrice}</span>
            </p>
          </Col>
        </Row>
      </Container>)}
    </>
  );
}
