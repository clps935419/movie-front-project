import axios from "axios";
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieIntroduction from "./components/MovieIntroduction";
import TimeTable from "./components/TimeTable";
import Trailer from "./components/Trailer";

export default function MovieInfo(params) {
  const {movieId} = useParams();
  console.log('id:', movieId)
  useEffect(() => {
    (async () => {
      console.log('*', `https://movie-service-d1vx.onrender.com/api/movies/${movieId}`)
      const response = await axios.get(`https://movie-service-d1vx.onrender.com/api/movies/${movieId}`);
      console.log(response)
    })();
  },[])
  return (<>
    <div>
      <div className='bg-dark'>
        <Trailer />
      </div>
      <div>
        <MovieIntroduction />
        <TimeTable />
      </div>
    </div>
  </>)
};
