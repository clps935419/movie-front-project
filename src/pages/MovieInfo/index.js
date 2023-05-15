import MovieIntroduction from "./components/MovieIntroduction";
import TimeTable from "./components/TimeTable";
import Trailer from "./components/Trailer";

export default function MovieInfo(params) {
  return (<>
    <div>
      <div className='bg-dark'>
        <Trailer />
      </div>
      <div className="py-3 px-5">
        <MovieIntroduction />
        <TimeTable />
      </div>
    </div>
  </>)
};
