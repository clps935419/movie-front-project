import Activity from "./components/Activity";
import BannerCarousels from "./components/BannerCarousels";
import FocusMovie from "./components/FocusMovie";
import styled from "styled-components";
import MovieCarousels from "./components/MovieCarousels";
import { useEffect } from "react";
import { apiHome } from "../../api";
import { useState } from "react";

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
  const {
    banner,
    focusMovie,
    activity,
    currentMovieList,
    futureMovieList,
  } = homeData;

  useEffect(() => {
    (async () => {
      const { data:{data}, ...rest } = await getHome();
      console.log("🚀 ~ file: index.js:34 ~ data:----", data)
      setHomeData(data);
    })();
  }, []);
  useEffect(() => {
  console.log("home", homeData);

  }, [homeData]);

  return (
    <>
      {Object.keys(homeData).length !== 0 && (
        <>
          <BannerCarousels dataArr={banner} />
          <MovieArea>
            <MovieCarousels dataArr={currentMovieList} title={"現正熱映"} />
            <MovieCarousels dataArr={futureMovieList} title={"即將上映"} />
          </MovieArea>
          <FocusMovie data={focusMovie} />
          <Activity dataArr={activity} />
        </>
      )}
    </>
  );
}

export default Home;
