import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '@/pages/Home';
import ErrorPage from '@/components/ErrorPage';
import MainSlider from '@/components/content/Main_slider';
import DetailsCard from '@/pages/Details_page';

import Login from '@/components/content/Login';
import AddParachute from '@/components/Add_parachute';



export default function Router() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: < MainSlider/>,
          children: []
        },
        {
          path: "/parachutes/:id",
          element: <DetailsCard/>,
          children: []
        },
        {
          path: "/login",
          element: < Login/>,
          children: []
        },
        {
          path: "/newParachute",
          element: < AddParachute />,
          children: []
        },
      ]},
  ]);

  return (
    <RouterProvider router={routes}/>
  );
}
