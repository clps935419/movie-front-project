import { Badge, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function SessionInfo(params) {
  const { sessionId } = useParams();
  // useEffect(() => {
  //   const getSessionInfo = async () => {
  //     const response = await axios.get(`https://movie-service-d1vx.onrender.com/api/sessions/${sessionId}/ticketTypes`);
  //     console.log('response:', response)
  //   };
  //   getSessionInfo();
  // }, [sessionId])
  const sampleData = [
    {
      _id: "646e3d7ebfff22bfa29c06f2",
      type: "套票",
      name: "雙人及拿套票",
      price: 560,
      content: "內含：......",
      ticketCount: 2
    },
    {
      _id: "646e3d7ebfff22bfa29c06f2",
      type: "套票",
      name: "雙人爆米花桶套票",
      price: 600,
      content: "內含：......",
      ticketCount: 2
    },
    {
      _id: "",
      type: "電影票",
      name: "個人及拿套票",
      price: 280,
      content: "內含：......",
      ticketCount: 1
    },
    {
      _id: "",
      type: "電影票",
      name: "個人及拿套票",
      price: 280,
      content: "內含：......",
      ticketCount: 1
    }
  ]
  return (<>
    <Container>
      <Row>
        <Col xs={12} md={4}><img className="img-fluid" src="https://www.vscinemas.com.tw/vsweb/upload/film/film_20230218037.jpg" alt="" /></Col>
        <Col xs={12} md={8} className="fs-6">
          <h1 className="card-title">超級瑪利歐兄弟電影版</h1>
          <p className="fs-3 card-subtitle mb-2 text-muted">THE SUPER MARIO BROS MOVIE</p>
          <Badge bg="customBadgeYellow" text="dark" pill className='mb-3 caption1'>普通級</Badge>
          <p>地點： 高雄影城A廳</p>
          <p>開演時間： 2023/04/05 13:20</p>
          <hr />
          <p>票種： 雙人吉拿套票X1</p>
          <p>明細： 電影票X2,$70飲料X2,大爆米花X1,吉拿棒X1</p>
          <hr />
          <p>總計： $790</p>
        </Col>
      </Row>
    </Container>
  </>)
};
