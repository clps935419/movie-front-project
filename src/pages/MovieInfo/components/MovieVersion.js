import _ from "lodash";
import { useEffect, useState } from 'react';
import { Badge, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function MovieVersion({ timeInfos }) {
  const [movieVersions, setMovieVersions] = useState([]);
  useEffect(() => {
    const types = _.uniq(timeInfos.map(item => { return item.type }));
    const movieInVersions = types.map(type => {
      return timeInfos.filter(item => item.type === type)
    });
    setMovieVersions(movieInVersions)
  }, [timeInfos])
  return (<>
    {
      movieVersions.map(movieVersion => (
        <Container key={`type-${movieVersion[0].type}`}>
          <Badge bg="dark" pill className='fs-5 my-3'>{movieVersion[0].type}</Badge>
          <Row xs={3} md={4} lg={6} className='gap-3'>
            {
              movieVersion.map(session => (
                <Col key={`${session.time}-${session.room}`}>
                  <Link to={`/ticket/${session.sessionId}`} className="btn">
                    <Card style={{ width: '158px', height: '100px', borderRadius: '20px' }}>
                      <Card.Body className='text-center'>
                        <Card.Title><h2>{session.time}</h2></Card.Title>
                        <Card.Subtitle className='fs-6 text-muted'>{session.room}{session.seats}席</Card.Subtitle>
                      </Card.Body>
                    </Card>
                  </Link>
                </Col>
              ))
            }
          </Row>
        </Container>
      ))
    }
  </>)
};
