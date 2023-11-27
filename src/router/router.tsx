import React, {useEffect} from 'react'
import { NonIndexRouteObject, useLocation, useRoutes } from 'react-router-dom';
import HomeIndex from '../pages/Home/HomeIndex';
import GameIndex from '../pages/Game/Index';


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
  ]

  return (
    <>
      {useRoutes(routes)}
    </>
  )
}