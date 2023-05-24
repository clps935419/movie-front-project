import { useEffect, useState } from "react";
import styled from "styled-components";
import { apiHome } from "../../api";
import Activity from "./components/Activity";
import BannerCarousels from "./components/BannerCarousels";
import FocusMovie from "./components/FocusMovie";
import MovieCarousels from "./components/MovieCarousels";

const { getHome } = apiHome;

const MovieArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  justify-content: center;
  padding: 80px 0;
`;

function Home() {
  const [homeData, setHomeData] = useState({});
  const { banner, focusMovie, movieList, activity } = homeData;
  useEffect(() => {
    (async () => {
      const { data, ...rest } = await getHome();
      setHomeData(data);
    })();
  }, []);

  return (
    <>
      <BannerCarousels dataArr={banner} />
      <MovieArea>
        <MovieCarousels dataArr={movieList} title={"現正熱映"} />
        <MovieCarousels dataArr={movieList} title={"即將上映"} />
      </MovieArea>
      <FocusMovie dataArr={focusMovie} />
      <Activity dataArr={activity} />
    </>
  );
}

export default Home;
