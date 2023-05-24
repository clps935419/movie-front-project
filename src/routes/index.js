import Layout from '@/components/Layout';
import Activity from '@/pages/Activity';
import Home from "@/pages/Home";
import Member from '@/pages/Member';
import NotFound from '@/pages/NotFound';
import Test from '@/pages/Test';
import { Navigate } from 'react-router-dom';
import BookTicket from '../pages/BookTicket';
import TicketConfirm from '../pages/BookTicket/TicketConfirm';
import TicketSeats from '../pages/BookTicket/TicketSeats';
import MovieInfo from '../pages/MovieInfo';
import MoviesList from '../pages/MoviesList';

const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/movies",
        element: <MoviesList />,
      },
      {
        path: "/activity",
        element: <Activity />,
      },
      {
        path: "/theaters",
        element: <Test />,
      },
      {
        path: "/member",
        element: <Member />,
      },
      {
        path: "/ticket/movie/:movieId",
        element: <MovieInfo />,
      },
      {
        path: "/ticket/:sessionId",
        element: <BookTicket />,
      },
      {
        path: "/ticket/:sessionId/seats",
        element: <TicketSeats />,
      },
      {
        path: "/ticket/:sessionId/confirm",
        element: <TicketConfirm />,
      },
      //攔截器範例
      // {
      //   path: "/member",
      //   element: <RouterInterceptor inner={<Member />} />,
      // },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
  //   {
  //     path: "login",
  //     element: <Information />,
  //   },
];
export default routeConfig;
