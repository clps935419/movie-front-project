import Layout from "@/components/Layout";
import Information from '@/pages/Information';
import Test from '@/pages/Test';
import NotFound from "@/pages/NotFound";

const routeConfig = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Information /> },
      {
        path: "/information",
        element: <Information />,
      },
      {
        path: "/movies",
        element: <Test />,
      },
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
