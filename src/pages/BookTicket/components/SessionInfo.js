import { useEffect, useMemo, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTicketInfo } from "@/store/slice/ticketsSlice";
import { selectCurrentTicketDetailsArr, selectCurrentTicketTotalCount, selectCurrentTicketTotalPrice, selectCurrentTicketTypesArr } from "@/store/slice/ticketsSlice";
import { selectCurrentChooseSeatArr } from "../../../store/slice/ticketsSlice";

export default function SessionInfo(params) {
  const myTicketInfo = useSelector(selectTicketInfo);
  const myTicketTypeArr = useSelector(selectCurrentTicketTypesArr);
  const myTicketContent = useSelector(selectCurrentTicketDetailsArr);
  const myTicketTotalPrice = useSelector(selectCurrentTicketTotalPrice);
  const seatsArr = useSelector(selectCurrentChooseSeatArr);
  const {
    imgUrl,
    movieCName,
    movieENam,
    inTheatersTime,
    movieTime,
    rating,
    dateTime,
    theaterName,
    room,
  } = myTicketInfo;
  const ticketTypesEle = myTicketTypeArr.map((item) => {
    return <div key={item}>{item}</div>;
  });
  const ticketDetailsEle = myTicketContent.map((item) => {
    return <div key={item}>{item}</div>;
  });
  const seatEle = seatsArr
    .map((item) => {
      const { row, col } = item;
      return <div key={row}>{`${row}排 ${col}號`}</div>;
    });

  return (
    <>
      <Container>
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
              <div>{seatEle}</div>
            </p>
            <hr />
            <p className="d-flex gap-1">
              <span style={{ whiteSpace: "nowrap" }}>總計：</span>
              <span>${myTicketTotalPrice}</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
