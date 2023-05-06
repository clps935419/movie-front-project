import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import styled from "styled-components";

const Img = styled.img`
  width:100%;
  height:150px;
  object-fit:cover;
`;
const CardWrapper = styled.div`
  height: 350px;
  width: 18rem;
`;
const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const CardContent = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
`;

function CardTemplate(props) {
  const { img = "test", title="test", content="test" } = props;
  return (
    <>
      <Card as={CardWrapper}>
        <Card.Img as={Img} variant="top" src={img} />
        <Card.Body as={CardBody}>
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text as={CardContent}>{content}</Card.Text>
          </div>
          <div className="d-grid mt-3">
            <Button variant="primary">訂票</Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
export default CardTemplate;
