import React from 'react';
import { NavWrap, NavTop, LogoGroup, ButtonGrounp } from '../pages/Home/HomeIndex.styled';
import theme from '../theme';
import { TgSvgIcon, XSvgIcon, RdSvgIcon } from '../utils/svgManage';
import { useTheme } from 'styled-components';
import logo from '../assets/img/logo.png'
export default function FooterIndex () {
  const theme = useTheme();

  return <NavWrap>
  <NavTop>
    <LogoGroup>
      <img style={{ width: theme.isH5 ? '21px' : '', height: theme.isH5 ? '21px' : '' }} src={logo} />
      <span>Rabbitgames </span>
    </LogoGroup>

    <ButtonGrounp>
      <a href={'https://t.me/Rabbitgames_org'} target='_blank' dangerouslySetInnerHTML={{ __html: TgSvgIcon || '' }} rel="noreferrer" />
      <a href={'https://twitter.com/Rait_io'} target='_blank' dangerouslySetInnerHTML={{ __html: XSvgIcon || '' }} rel="noreferrer" />
      {/* <span dangerouslySetInnerHTML={{ __html: RdSvgIcon || '' }} /> */}
    </ButtonGrounp>

  </NavTop>
</NavWrap>
}
