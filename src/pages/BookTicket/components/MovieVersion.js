import { Badge, Card, Container } from 'react-bootstrap';

export default function MovieVersion(params) {
  return (<>
    <Container>
      <Badge bg="dark" pill>數位版</Badge>
      <div className="d-flex justify-content-start p-2 gap-3">
        <Card>
          <Card.Body>
            <Card.Title>12:30</Card.Title>
            <Card.Subtitle>A廳 396席</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>12:30</Card.Title>
            <Card.Subtitle>A廳 396席</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>12:30</Card.Title>
            <Card.Subtitle>A廳 396席</Card.Subtitle>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>12:30</Card.Title>
            <Card.Subtitle>A廳 396席</Card.Subtitle>
          </Card.Body>
        </Card>
      </div>
    </Container>
  </>)
};
