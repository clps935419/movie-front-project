import { Badge, Col, Container, Row } from "react-bootstrap"

export default function SessionInfo(params) {
  return (<>
    <Container>
      <Row>
        <Col md={4}><img className="img-fluid h-50" src="https://www.vscinemas.com.tw/vsweb/upload/film/film_20230218037.jpg" alt="" /></Col>
        <Col md={8}><h3 class="card-title">超級瑪利歐兄弟電影版</h3>
          <h6 class="card-subtitle mb-2 text-muted">THE SUPER MARIO BROS MOVIE</h6>
          <Badge bg="warning" text="dark" pill>普通級</Badge>
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
