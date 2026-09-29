import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import PrivateRoute from "./PrivateRoute";
import NotFound from "../pages/NotFound/NotFound";
import TeenPatti from "../pages/CasinoDetails/TeenPatti/TeenPatti";
import DragonTiger from "../pages/CasinoDetails/DragonTiger/DragonTiger";
import AmarAkbarAnthony from "../pages/CasinoDetails/AmarAkbarAnthony/AmarAkbarAnthony";
import Baccarat from "../pages/CasinoDetails/Baccarat/Baccarat";
import Poker from "../pages/CasinoDetails/Poker/Poker";
import CricketWar from "../pages/CasinoDetails/CricketWar/CricketWar";
import MuflisTeenPatti from "../pages/CasinoDetails/MuflisTeenPatti/MuflisTeenPatti";
import DragonTigerLion from "../pages/CasinoDetails/DragonTigerLion/DragonTigerLion";
import LuckySeven from "../pages/CasinoDetails/LuckySeven/LuckySeven";
import FootballStudio from "../pages/CasinoDetails/FootballStudio/FootballStudio";
import TwoCardTeenPatti from "../pages/CasinoDetails/TwoCardTeenPatti/TwoCardTeenPatti";
import AkbarRomeoWalter from "../pages/CasinoDetails/AkbarRomeoWalter/AkbarRomeoWalter";

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
        {
          path: "/casino/amar-akbar-anthony",
          element: <AmarAkbarAnthony />,
        },
        {
          path: "/casino/baccarat",
          element: <Baccarat />,
        },
        {
          path: "/casino/poker",
          element: <Poker />,
        },
        {
          path: "/casino/cricket-war",
          element: <CricketWar />,
        },
        {
          path: "/casino/teen-patti-muflis",
          element: <MuflisTeenPatti />,
        },
        {
          path: "/casino/dragon-tiger-lion",
          element: <DragonTigerLion />,
        },
        {
          path: "/casino/lucky-7",
          element: <LuckySeven />,
        },
        {
          path: "/casino/foot-ball-studio",
          element: <FootballStudio />,
        },
        {
          path: "/casino/2-card-teen-patti",
          element: <TwoCardTeenPatti />,
        },
        {
          path: "/casino/akbar-romeo-walter",
          element: <AkbarRomeoWalter />,
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
