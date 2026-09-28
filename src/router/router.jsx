import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import TeenPatti from "../pages/CasinoDetails/TeenPatti/TeenPatti";
import DragonTiger from "../pages/CasinoDetails/DragonTiger/DragonTiger";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <App />
        </PrivateRoute>
      ),
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/casino/teenpatti",
          element: <TeenPatti />,
        },
        {
          path: "/casino/dragon-tiger",
          element: <DragonTiger />,
        },
      ],
    },
    // {
    //   path: "/:token",
    //   element: <Auth />,
    // },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  },
);
