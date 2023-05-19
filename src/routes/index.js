import Layout from '@/components/Layout';
import Information from '@/pages/Information';
import Test from '@/pages/Test';
import Member from '@/pages/Member';
import NotFound from '@/pages/NotFound';
import { Navigate } from 'react-router-dom';
import Activity from '@/pages/Activity';
import MoviesList from '../pages/MoviesList';
import Home from "@/pages/Home";
import RouterInterceptor from './RouterInterceptor';

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
