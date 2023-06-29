import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const TheaterCard = ({ theater }) => {
  return (
    <Card>
      <Card.Img width={200} height={200} variant="top" src={theater.imgUrl} />
      <Card.Body>
        <Card.Title>{theater.name}</Card.Title>
        <p className="mb-0">{theater.address}</p>
        <p>{theater.phone}</p>
        <Button className="float-end" variant="customBtn1" href={`#/theaters/${theater.name}`}>
          詳細資訊
        </Button>
      </Card.Body>
    </Card>
  );
};

export default TheaterCard;
