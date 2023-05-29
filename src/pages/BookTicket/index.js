import { apiTicket } from "@/api";
import { setTicketsInfo } from "@/store/slice/ticketsSlice";
import { useEffect } from 'react';
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import SessionInfo from "./components/SessionInfo";


const { getSessionInfo } = apiTicket;
export default function BookTicket(params) {
  const dispatch = useDispatch();
  const { sessionId } = useParams();
  useEffect(() => {
    (async () => {
      try {
        const res = await getSessionInfo({ id: sessionId })
        const resultData = res.data.data;
        // console.log('result:', resultData);
        const result = {
          imgUrl: resultData.movie.imgUrl,
          movieCName: resultData.movie.movieCName,
          movieEName: resultData.movie.movieEName,
          rating: resultData.movie.rating,
          dateTime: new Date(resultData.datetime).toLocaleString(),
          theaterName: resultData.theater.name,
          room: resultData.roomInfo.name,
        }
        dispatch(setTicketsInfo(result));
      } catch (error) {
        console.log('BookTicket error:', error)
      }
    })()
  }, [sessionId]);
  return (
    <>
      <Container>
        <SessionInfo />
        <Outlet />
      </Container>
    </>
  );
}
