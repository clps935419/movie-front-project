import { Container, Ratio } from 'react-bootstrap';

export default function Trailer(params) {
  return (<>
    <Container>
      <Ratio aspectRatio="21x9">
        <iframe width="1200" height="506" src="https://www.youtube.com/embed/nqzpXdpM9hg" title="【超級瑪利歐兄弟電影版】終極預告- 4月5日 中、英文、IMAX版歡樂登場" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </Ratio>
    </Container>
  </>)
};
