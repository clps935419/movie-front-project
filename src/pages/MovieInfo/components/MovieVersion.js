import { Badge, Card, Col, Container, Row } from 'react-bootstrap';

export default function MovieVersion(params) {
  return (<>
    <Container>
      <Badge bg="dark" pill className='fs-5 my-3'>數位版</Badge>
      <Row xs={3} md={4} lg={6} className='gap-3'>
        <Col>
          <Card style={{ width: '158px', height: '100px', borderRadius: '20px' }}>
            <Card.Body className='text-center'>
              <Card.Title><h2>12:30</h2></Card.Title>
              <Card.Subtitle className='fs-6 text-muted'>A廳 396席</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '158px', height: '100px', borderRadius: '20px' }}>
            <Card.Body className='text-center'>
              <Card.Title><h2>12:30</h2></Card.Title>
              <Card.Subtitle className='fs-6 text-muted'>A廳 396席</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '158px', height: '100px', borderRadius: '20px' }}>
            <Card.Body className='text-center'>
              <Card.Title><h2>12:30</h2></Card.Title>
              <Card.Subtitle className='fs-6 text-muted'>A廳 396席</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '158px', height: '100px', borderRadius: '20px' }}>
            <Card.Body className='text-center'>
              <Card.Title><h2>12:30</h2></Card.Title>
              <Card.Subtitle className='fs-6 text-muted'>A廳 396席</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '158px', height: '100px', borderRadius: '20px' }}>
            <Card.Body className='text-center'>
              <Card.Title><h2>12:30</h2></Card.Title>
              <Card.Subtitle className='fs-6 text-muted'>A廳 396席</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: '158px', height: '100px', borderRadius: '20px' }}>
            <Card.Body className='text-center'>
              <Card.Title><h2>12:30</h2></Card.Title>
              <Card.Subtitle className='fs-6 text-muted'>A廳 396席</Card.Subtitle>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </>)
};
