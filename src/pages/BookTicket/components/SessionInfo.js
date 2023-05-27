import { useEffect, useMemo, useState } from "react";
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectTicketInfo } from "@/store/slice/ticketsSlice";

export default function SessionInfo(params) {
  const myTicketInfo = useSelector(selectTicketInfo);
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
    ticketTypes, //票種
    ticketDetails, //明細
    ticketTotalPrice, //總計
  } = myTicketInfo;

  return (
    <>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <img className="img-fluid" src={imgUrl} alt={movieCName} />
          </Col>
          <Col xs={12} md={8} className="fs-6">
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
              <span>{ticketTypes}</span>
            </p>
            <p className="d-flex gap-1">
              <span style={{ whiteSpace: "nowrap" }}>明細：</span>
              <span>{ticketDetails}</span>
            </p>
            <hr />
            <p className="d-flex gap-1">
              <span style={{ whiteSpace: "nowrap" }}>總計：</span>
              <span>${ticketTotalPrice}</span>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}
