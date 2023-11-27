import React from 'react';
import { NavWrap, NavTop, LogoGroup, RightUl, UlHref, ButtonGrounp, ConnectWalletButton } from '../pages/Home/HomeIndex.styled';
import theme from '../theme';
import { TgSvgIcon, XSvgIcon } from '../utils/svgManage';
import { useTheme } from 'styled-components';
import logo from '../assets/img/logo.png'
import RouterLink from './RouterLink';

export default function HeaderNav() {
  const theme = useTheme();
  return <NavWrap>
    <NavTop>
      <LogoGroup
        as={'a'}
        href='/'
      >
        <img style={{ width: theme.isH5 ? '21px' : '', height: theme.isH5 ? '21px' : '' }} src={logo} />
        <span>Rabbitgames </span>
      </LogoGroup>
      <RightUl>

        <UlHref style={{ display: theme.isH5 ? 'none' : '' }}>
          <RouterLink to={"/"} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} >About</RouterLink>
          <RouterLink to={"/game"} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} >Game</RouterLink>
          <div >
            <RouterLink style={{ pointerEvents: 'none', color: '#686868' }} to={"/airdrop"} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} >AIRDROP</RouterLink>
          </div>
          <div >
            <RouterLink style={{ pointerEvents: 'none', color: '#686868' }} to={"/Development"} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} >Under Development</RouterLink>
          </div>
        </UlHref>


        <ButtonGrounp>
          <a href={'https://t.me/Rabbitgames_org'} target='_blank' dangerouslySetInnerHTML={{ __html: TgSvgIcon || '' }} rel="noreferrer" />
          <a href={'https://twitter.com/Rait_io'} target='_blank' dangerouslySetInnerHTML={{ __html: XSvgIcon || '' }} rel="noreferrer" />
          <ConnectWalletButton style={{ pointerEvents: 'none' }} >Connect Wallet</ConnectWalletButton>
        </ButtonGrounp>
      </RightUl>

    </NavTop>
  </NavWrap>
}
