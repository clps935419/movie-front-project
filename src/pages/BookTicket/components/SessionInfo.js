import { useEffect, useMemo, useState } from 'react';
import { Badge, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function SessionInfo(params) {
  const { sessionId } = useParams();
  const [sessionInfo, setSessionInfo] = useState({})
  const ticketInfo = useMemo(() => {
    //! 從redux拿出資料 => how?
    const sample = [
      {
        _id: '646e40af0aa2b666bd98e847',
        type: '套票',
        name: '雙人吉拿套票',
        price: 740,
        content: '內含:電影票 X 2, 70元飲料 X 2, 大爆米花 X 1, 吉拿棒 X 1',
        ticketCount: 2,
        buyCount: '2'
      },
      {
        _id: '646e40af0aa2b666bd98e848',
        type: '套票',
        name: '吉拿套票',
        price: 370,
        content: '內含:電影票 X 1, 70元飲料 X 1, 吉拿棒 X 1',
        ticketCount: 1,
        buyCount: '1'
      }
    ]
    return {
      ticketTypes: sample.map(item => {
        return `${item.name}*${item.buyCount}`
      }).join(','),
      ticketDetails: sample.map(item => {
        return `${item.content}`
      }).join(','),
      ticketTotalPrice: sample.map(item => {
        return item.price * item.buyCount
      }).reduce((accumulator, currentValue) => { return accumulator + currentValue })
    }
  }, [])
  useEffect(() => {
    // 需要再多一隻api - 來獲得場次的資訊
    const sampleSessionInfo = {
      imgUrl: "https://www.vscinemas.com.tw/vsweb/upload/film/film_20230426002.jpg",
      movieCName: "玩命關頭X",
      movieEName: 'FAST X',
      releaseMovieTime: "2023/05/17",
      movieTime: 141,
      movieLevel: "輔導級",
      datetime: "2023-05-01T10:21:22.164+00:00",
      theaterName: "高雄影城",
      room: "A廳"
    }
    setSessionInfo(sampleSessionInfo)
  }, [sessionId]);

  return (<>
    <Container>
      <Row>
        <Col xs={12} md={4}><img className="img-fluid" src={sessionInfo.imgUrl} alt={sessionInfo.movieCName} /></Col>
        <Col xs={12} md={8} className="fs-6">
          <h1 className="card-title">{sessionInfo.movieCName}</h1>
          <p className="fs-3 card-subtitle mb-2 text-muted">{sessionInfo.movieEName}</p>
          <Badge bg="customBadgeYellow" text="dark" pill className='mb-3 caption1'>{sessionInfo.movieLevel}</Badge>
          <p>地點： {sessionInfo.theaterName}{sessionInfo.room}</p>
          <p>開演時間： {sessionInfo.datetime}</p>
          <hr />
          <p className='d-flex gap-1'><span style={{ whiteSpace: 'nowrap' }}>票種：</span><span>{ticketInfo.ticketTypes}</span></p>
          <p className='d-flex gap-1'><span style={{ whiteSpace: 'nowrap' }}>明細：</span><span>{ticketInfo.ticketDetails}</span></p>
          <hr />
          <p className='d-flex gap-1'><span style={{ whiteSpace: 'nowrap' }}>總計：</span><span>${ticketInfo.ticketTotalPrice}</span></p>
        </Col>
      </Row>
    </Container>
  </>)
};
