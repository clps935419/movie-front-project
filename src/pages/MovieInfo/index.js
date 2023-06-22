import { apiMovieInfo } from "@/api";
import _ from 'lodash';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieIntroduction from "./components/MovieIntroduction";
import TimeTable from "./components/TimeTable";
import Trailer from "./components/Trailer";

const { getMovieInfo } = apiMovieInfo;

export default function MovieInfo() {
  const { movieId } = useParams();
  const [movieInfo, setMovieInfo] = useState({});
  const [theaterInfo, setTheaterInfo] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await getMovieInfo({ params: { id: movieId } })
      const result = res.data.data
      // console.log('result:', result);
      setMovieInfo(result[0].movie);
      setTheaterInfo(result.filter(item => !_.isEmpty(item.theaterInfo)).map(item => { return item.theaterInfo }))
    })();
  }, [movieId])
  return (<>
    {!_.isEmpty(theaterInfo) && (<div>
      <div className='bg-dark'>
        <Trailer url={movieInfo.videoUrl} />
      </div>
      <div>
        <MovieIntroduction movieInfo={movieInfo} />
        <TimeTable theaterInfo={theaterInfo} />
      </div>
    </div>)}
  </>)
};
