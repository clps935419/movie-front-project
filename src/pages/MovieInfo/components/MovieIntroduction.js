import _ from 'lodash';
import { Badge, Col, Container, Row } from 'react-bootstrap';


export default function MovieIntroduction({ movieInfo }) {
  return (<>
    <Container className='my-5'>
      <Row>
        <Col xs={12} md={4}><img className="img-fluid" src={movieInfo.imgUrl} alt={movieInfo.movieEName} /></Col>
        <Col xs={12} md={8} className='fs-6'>
          <h1 className="card-title">{movieInfo.movieCName}</h1>
          <p className="fs-3 card-subtitle mb-2 text-muted">{movieInfo.movieEName}</p>
          <Badge bg="customBadgeYellow" text="dark" pill className='mb-3 caption1'>{movieInfo.movieLevel}</Badge>
          <p className='d-flex gap-1'><span style={{ whiteSpace: 'nowrap' }}>片長：</span><span>{movieInfo.movieTime}分</span></p>
          <p className='d-flex gap-1'><span style={{ whiteSpace: 'nowrap' }}>上映日期：</span><span>{movieInfo.releaseMovieTime}</span></p>
          <p className='d-flex gap-1'><span style={{ whiteSpace: 'nowrap' }}>導演：</span><span>{movieInfo.director}</span></p>
          <p className='d-flex gap-1'><span style={{ whiteSpace: 'nowrap' }}>演員：</span><span>{_.join(movieInfo.cast, '、')}</span></p>
          {/* <p>類型：{movieInfo.movieCName}</p> */}
          <h4 className='my-3'>劇情簡介</h4>
          <p>{movieInfo.synopsis}</p>
        </Col>
      </Row>
    </Container>
  </>)
};
