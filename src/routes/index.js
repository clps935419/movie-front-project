import Layout from '@/components/Layout';
import Information from '@/pages/Information';
import Test from '@/pages/Test';
import Member from '@/pages/Member';
import NotFound from '@/pages/NotFound';
import { Navigate } from 'react-router-dom';

const routeConfig = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" />,
      },
      {
        path: '/home',
        element: <Information />,
      },
      {
        path: '/movies',
        element: <Test />,
      },
      {
        path: '/activity',
        element: <Test />,
      },
      {
        path: '/theaters',
        element: <Test />,
      },
      {
        path: '/member',
        element: <Member />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
  //   {
  //     path: "login",
  //     element: <Information />,
  //   },
];
export default routeConfig;
