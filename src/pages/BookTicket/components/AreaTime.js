import { Container } from 'react-bootstrap';
import MovieVersion from "./MovieVersion";

export default function AreaTime(params) {
  return (<>
    <Container>
      <div className="d-flex gap-3">
        <h4>高雄影城</h4>
        <h5 className="text-muted">高雄市XX區XX路XX號</h5>
      </div>
      <div>
        <MovieVersion />
        <MovieVersion />
      </div>
    </Container>
  </>)
};
