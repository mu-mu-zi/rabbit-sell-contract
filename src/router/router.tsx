import React, {useEffect} from 'react'
import { NonIndexRouteObject, useLocation, useRoutes } from 'react-router-dom';
import HomeIndex from '../pages/Home/HomeIndex';
import GameIndex from '../pages/Game/Index';
import AirdropIndex from '../pages/Airdrop/Index';


export default function Routers() {

  const routes: NonIndexRouteObject[] = [
    {
      element: <HomeIndex />,
      path: "/",
    },
    {
      element: <GameIndex />,
      path: "/game",
    },
    {
      element: <AirdropIndex />,
      path: "/airdrop",
    },
  ]

  return (
    <>
      {useRoutes(routes)}
    </>
  )
}