import { Container, Ratio } from 'react-bootstrap';

export default function Trailer({title,url}) {
  return (<>
    <Container>
      <Ratio aspectRatio="21x9">
        <iframe width="1200" height="506" src={url} title={title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
      </Ratio>
    </Container>
  </>)
};
