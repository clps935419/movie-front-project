import { Container, Ratio } from 'react-bootstrap';
import YouTube from "react-youtube";

export default function Trailer({ url }) {
  return (<>
    <Container>
      <Ratio aspectRatio="21x9">
        <YouTube
          videoId={url}
          opts={{
            width: "100%",
            height: "100%",
          }}
        />
      </Ratio>
    </Container>
  </>)
};
