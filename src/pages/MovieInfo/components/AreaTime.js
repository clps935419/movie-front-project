import { Container } from 'react-bootstrap';
import MovieVersion from "./MovieVersion";

export default function AreaTime(params) {
  return (<>
    <Container>
      <div className="d-flex gap-3">
        <p className='fs-1 fw-semibold'>高雄影城</p>
        <p className="fs-6 text-muted py-3">高雄市XX區XX路XX號</p>
      </div>
      <div>
        <MovieVersion />
        <MovieVersion />
      </div>
    </Container>
  </>)
};
