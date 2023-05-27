import Layout from "@/components/Layout";
import Activity from "@/pages/Activity";
import Home from "@/pages/Home";
import Member, {
  BonusRecord,
  PurchaseRecord,
  UserInformation,
} from "@/pages/Member";
import NotFound from "@/pages/NotFound";
import Theater from "@/pages/Theater";
import TheaterList from "@/pages/TheaterList";
import { Navigate } from "react-router-dom";
import BookTicket from "../pages/BookTicket";
import TicketConfirm from "../pages/BookTicket/TicketConfirm";
import TicketSeats from "../pages/BookTicket/TicketSeats";
import MovieInfo from "../pages/MovieInfo";
import MoviesList from "../pages/MoviesList";
import RouterInterceptor from "./RouterInterceptor";
import TicketChoose from "../pages/BookTicket/TicketChoose";

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
        element: <TheaterList />,
      },
      {
        path: "/theaters/:id",
        element: <Theater />,
      },
      {
        path: "/member",
        element: <RouterInterceptor inner={<Member />} />,
        children: [
          { index: true, element: <UserInformation /> },
          { path: "purchaseRecord", element: <PurchaseRecord /> },
          { path: "bonusRecord", element: <BonusRecord /> },
        ],
      },
      {
        path: "/ticket/movie/:movieId",
        element: <MovieInfo />,
      },
      {
        path: "/ticket",
        element: <BookTicket />,
        children: [
          { path: ":sessionId", index: true, element: <TicketChoose /> },
          { path: ":sessionId/seats", element: <TicketSeats /> },
          { path: ":sessionId/confirm", element: <TicketConfirm /> },
        ],
      }
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
