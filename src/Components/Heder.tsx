import React, { useEffect, useRef, useState } from 'react';
import { NavWrap, NavTop, LogoGroup, RightUl, UlHref, ButtonGrounp, ConnectWalletButton } from '../pages/Home/HomeIndex.styled';
import theme from '../theme';
import { TgSvgIcon, XSvgIcon, menuDownSvgIcon, menuSvgIcon } from '../utils/svgManage';
import { useTheme } from 'styled-components';
import logo from '../assets/img/logo.png'
import RouterLink from './RouterLink';
import DropdownMenu from './DropdownMenu';
import Toggle from './Toggle/Toggle';
import Notice from './Notification';
import Flex from './Box/Flex';

export enum SessionStorageKey {
  WalletAuthorized = "WALLET_AUTHORIZED",
}

export default function HeaderNav() {
  const theme = useTheme();
  const [unisatInstalled, setUnisatInstalled] = useState(true);
  const [accounts, setAccounts] = useState<string[]>([]);
  const [address, setAddress] = useState("");
  console.log(accounts)
  console.log(address)
  // 1-判断是否有uniset
  useEffect(() => {

    async function checkUnisat() {
      let unisat = (window as any).unisat;

      for (let i = 1; i < 10 && !unisat; i += 1) {
        await new Promise((resolve) => setTimeout(resolve, 100 * i));
        unisat = (window as any).unisat;
      }
      console.log(unisat)
      if (unisat) {
        setUnisatInstalled(true);
      } else if (!unisat)
        setUnisatInstalled(false);
      return;

      // unisat.getAccounts().then((accounts: string[]) => {
      //     handleAccountsChanged(accounts);
      // });

      // unisat.on("accountsChanged", handleAccountsChanged);
      // unisat.on("networkChanged", handleNetworkChanged);

      // return () => {
      //     unisat.removeListener("accountsChanged", handleAccountsChanged);
      //     unisat.removeListener("networkChanged", handleNetworkChanged);
      // };
    }

    checkUnisat().then();
  }, []);
  // 退出连接
  const disConnect = async () => {
    if (localStorage.getItem(SessionStorageKey.WalletAuthorized) && !!accounts.length) {
      setAddress('')
      setAccounts([])
      localStorage.removeItem(SessionStorageKey.WalletAuthorized)
    }
  }
  // 刷新重连
  useEffect(() => {
    if (localStorage.getItem(SessionStorageKey.WalletAuthorized)) {
      connect()
    }
  }, [localStorage.getItem(SessionStorageKey.WalletAuthorized)])
  // 连接
  const connect = async () => {
    try {
      const result = await unisat.requestAccounts();
      handleAccountsChanged(result);
    } catch (e: any) {
      Notice.Error({
        title: e.message || 'error'
      })
    }
  }
  // 储存新账号
  const selfRef = useRef<{ accounts: string[] }>({
    accounts: [],
  });
  const self = selfRef.current;
  const handleAccountsChanged = async (_accounts: string[]) => {
    if (self.accounts[0] === _accounts[0] && localStorage.getItem(SessionStorageKey.WalletAuthorized)) {
      // prevent from triggering twice
      return;
    }
    self.accounts = _accounts;
    if (_accounts.length > 0) {
      setAccounts(_accounts);
      localStorage.setItem(SessionStorageKey.WalletAuthorized, _accounts[0])
      setAddress(_accounts[0]);
      // setAddress(address);
      // getBasicInfo();
    } else {
      localStorage.setItem(SessionStorageKey.WalletAuthorized, '')
    }
  };



  const unisat = (window as any).unisat;
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
            <RouterLink  to={"/airdrop"} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} >Airdrop</RouterLink>
          </div>
          <div >
            <RouterLink style={{ pointerEvents: 'none', color: '#686868' }} to={"/Development"} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} >Under Development</RouterLink>
          </div>
        </UlHref>

        <ButtonGrounp>
          <a href={'https://t.me/Rabbitgames_org'} target='_blank' dangerouslySetInnerHTML={{ __html: TgSvgIcon || '' }} rel="noreferrer" />
          <a href={'https://twitter.com/Rait_io'} target='_blank' dangerouslySetInnerHTML={{ __html: XSvgIcon || '' }} rel="noreferrer" />
          <Toggle vIf={!accounts.length}>
            <ConnectWalletButton
              onClick={async () => {
                if (!unisatInstalled) {
                  window.open("https://unisat.io")
                  return;
                }
                console.log(unisat)
                connect()

              }}
            >
              {
                unisatInstalled
                  ? 'Connect Unisat Wallet'
                  : 'Install Unisat Wallet'
              }

            </ConnectWalletButton>
            <DropdownMenu
              title=""
              columns={[
                {
                  label: 'Exit',
                  to: '/',
                  render: (text: string) => {
                    return <Flex
                      justifyContent="center"
                      width="100%"
                      minWidth='100px'
                      cursor="pointer"
                      onClick={async () => {
                        disConnect()
                      }}
                    >
                      {text}
                    </Flex>
                  }
                }
              ]}
            >
              <ConnectWalletButton>
                <div className='address'>
                  <span>
                    {address.replace(address.substring(5, 38), '...')}
                  </span>
                  <span dangerouslySetInnerHTML={{ __html: menuDownSvgIcon || '' }} rel="noreferrer" />
                </div>
              </ConnectWalletButton>
            </DropdownMenu>
          </Toggle>
          <Toggle vIf={theme.isH5}>
            <DropdownMenu
              columns={[
                {
                  label: 'About',
                  to: '/',
                },
                {
                  label: 'Game',
                  to: '/game',
                },
                {
                  label: 'Airdrop',
                  to: '/Airdrop',
                  render: () => {
                    return <span>Airdrop</span>
                  }
                },
                {
                  label: 'Under Development',
                  to: '/Development',
                  render: () => {
                    return <span style={{ pointerEvents: 'none', color: '#686868' }}>Under Development</span>
                  }
                },
              ]}
              title=""
            >

              <span dangerouslySetInnerHTML={{ __html: menuSvgIcon || '' }} rel="noreferrer" />
            </DropdownMenu>
          </Toggle>
        </ButtonGrounp>

      </RightUl>

    </NavTop>
  </NavWrap>
}


