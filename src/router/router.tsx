import React, {useEffect} from 'react'
import { NonIndexRouteObject, useLocation, useRoutes } from 'react-router-dom';
import HomeIndex from '../pages/Home/HomeIndex';
import GameIndex from '../pages/Game/Index';
import AirdropIndex from '../pages/Airdrop/Index';
import HeaderNav from '../Components/Heder';
import NFTBox from '../pages/NftBox';


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
    {
      element: <NFTBox />,
      path: "/nft",
    },
  ]

  return (
    <>
      <HeaderNav />
      {useRoutes(routes)}
    </>
  )
}