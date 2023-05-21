import Activity from "./components/Activity";
import BannerCarousels from "./components/BannerCarousels";
import FocusMovie from "./components/FocusMovie";
import MovieCardTemplate from "./components/MovieCardTemplate";
import styled from "styled-components";
import Carousel from "react-bootstrap/Carousel";
import MovieCarousels from "./components/MovieCarousels";

const MovieArea = styled.div`
  display: flex;
  flex-direction: column;
  gap:32px;
  justify-content: center;
  padding: 80px 0;
`

function Home() {
  
  return (
    <>
      <BannerCarousels />
      <MovieArea>
        <MovieCarousels title={"現正熱映"} />
        <MovieCarousels title={"即將上映"} />
      </MovieArea>
      <FocusMovie />
      <Activity />
    </>
  );
}

export default Home;
