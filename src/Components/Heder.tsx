import React, { useContext, useEffect, useRef, useState } from 'react';
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
import { useAppDispatch, useAppSelector } from '../hook/hooks';
import { setAccountInfo, setNetwork, setWalletAddress } from '../store/app';
import { WALLETS } from '../connectWallet/WalletsNetwork';
import useConnect from '../hook/useConnect';
import { usePluginModel } from '../hook/usePluginModel';
import { ModalContext } from './ModalContext/ModalContext';
import ConnectModal, { ConnectModalProps } from './Modal/ConnectModal';


export enum SessionStorageKey {
  WalletAuthorized = "WALLET_AUTHORIZED",
}

export default function HeaderNav() {
  const theme = useTheme();
  const { needApprove, approve, checkHashStatus, NewWriteContract, project, getTokenBalance } = usePluginModel();
  const [unisatInstalled, setUnisatInstalled] = useState(true);
  const currentHooks = useConnect();
  const [accounts, setAccounts] = useState<string[]>([]);
  const [address, setAddress] = useState("");
  const dispatch = useAppDispatch()
  const store = useAppSelector((state) => state.App)
  const { openModal, destoryModal } = useContext(ModalContext)
  


  useEffect(() => {
    if(store.network === 'Ethereum' && store.walletAddress) { 
      project.on('accountsChanged', (accounts: string[]): void => {
        console.log("opera wallet change accounts: ", accounts)
        currentHooks.connect()
        // this.actions.update({ accounts })
      })
      // project.on('chainChanged', (chainId: string): void => {
      //   console.log("opera wallet chainId change: ", Number.parseInt(chainId, 16))
      //   currentHooks.connect()
      // })
    }
}, [store.network, project])
  useEffect(() => {
    let unisat = (window as any).unisat;
    if(store.network === 'Bitcoin' && store.walletAddress) { 
      unisat.on("accountsChanged", (e: string[]) => {
        console.log(e)
        currentHooks.connect()
      }
  )}
}, [store.network, project])

  // 1-判断是否有uniset
  // useEffect(() => {
  //   getBalance()
  //   async function checkUnisat() {
  //     let unisat = (window as any).unisat;

  //     for (let i = 1; i < 10 && !unisat; i += 1) {
  //       await new Promise((resolve) => setTimeout(resolve, 100 * i));
  //       unisat = (window as any).unisat;
  //     }
  //     console.log(unisat)
  //     if (unisat) {
  //       setUnisatInstalled(true);
  //     } else if (!unisat)
  //       setUnisatInstalled(false);


  //       if(unisat) {
  //         // 需要自动连接钱包时打开
  //         // unisat.getAccounts().then((accounts: string[]) => {
  //         //   handleAccountsChanged(accounts);
  //         // });
  //         unisat.on("accountsChanged", (e: string[]) => {
  //           handleAccountsChanged(e);
  //           // 切换钱包的时候需要把推特信息清空
  //           dispatch(setAccountInfo(undefined))
  //           localStorage.removeItem('accountInfo')
  //         }
  //       );
  //         unisat.on("networkChanged", handleAccountsChanged);
  //       }

  //     return () => {
  //       if(unisat) {

  //         unisat.removeListener("accountsChanged", handleAccountsChanged);
  //         unisat.removeListener("networkChanged", handleAccountsChanged);
  //       }
  //     };
  //   }
  //   checkUnisat().then();
  // }, []);
  // 判断是否从别的地方断开连接
  // useEffect(() => {
  //   if(!store.walletAddress) {
  //     setAddress('')
  //     setAccounts([])
  //   }
  // }, [store.walletAddress])
  // 退出连接
  const disConnect = async () => {
    if (localStorage.getItem(SessionStorageKey.WalletAuthorized)) {
      setAddress('')
      setAccounts([])
      localStorage.setItem(SessionStorageKey.WalletAuthorized, '')
      dispatch(setWalletAddress(''))
    }
  }
  // 刷新重连
  // useEffect(() => {
  //   if (localStorage.getItem(SessionStorageKey.WalletAuthorized)) {
  //     connect()
  //   }
  // }, [localStorage.getItem(SessionStorageKey.WalletAuthorized), unisat])
  // 连接
  // const connect = async () => {
  //   try {
  //     console.log(unisat)
  //     if(unisat) {
  //     const result = await unisat.requestAccounts();

  //       handleAccountsChanged(result);
  //     }
  //   } catch (e: any) {
  //     Notice.Error({
  //       title: e.message || 'error'
  //     })
  //   }
  // }
  // 储存新账号
  // const selfRef = useRef<{ accounts: string[] }>({
  //   accounts: [],
  // });
  // const self = selfRef.current;
  // const handleAccountsChanged = async (_accounts: string[]) => {
  //   const network = await unisat.getNetwork();
  //   if(network === 'testnet') {
  //     Notice.Warning({title: 'Please connect to the official website'})
  //   }
  //   if (self.accounts[0] === _accounts[0] && localStorage.getItem(SessionStorageKey.WalletAuthorized)) {
  //     // prevent from triggering twice
  //     return;
  //   }
  //   self.accounts = _accounts;
  //   if (_accounts.length > 0) {
  //     setAccounts(_accounts);
  //     localStorage.setItem(SessionStorageKey.WalletAuthorized, _accounts[0])
  //     dispatch(setWalletAddress(_accounts[0]))
  //     setAddress(_accounts[0]);
  //     // setAddress(address);
  //     // getBasicInfo();
  //   } else {
  //     localStorage.setItem(SessionStorageKey.WalletAuthorized, '')
  //     dispatch(setWalletAddress(''))
  //   }
  // };

  const onConnect = async () => {
    if(store.network === 'Bitcoin') {
      if (!currentHooks.haveWallet) {
        if(theme.isH5) {
          Notice.Info({title: 'Mobile version is not supported yet'})
          return;
        }
        window.open("https://unisat.io")
        return;
      }
      currentHooks.connect();
      return
    }
    if(store.network === 'Ethereum') {
      if(!currentHooks.haveWallet) {
        window.open("https://metamask.io")
        return;
      }
      currentHooks.connect();
    //  openModal<ConnectModalProps>(ConnectModal)
    }
  }


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
            <RouterLink  to={"/nft"} className={({ isActive }) => `nav-item ${isActive ? "active" : ""}`} >NFT Box</RouterLink>
          </div>
          <div >
            <a style={{  }} href={"https://medium.com/@rabbitgames"} target={"_blank"} className={`nav-item`} rel="noreferrer" >BLOG</a>
          </div>
        </UlHref>

        <ButtonGrounp>
          <a href={'https://t.me/Rabbitgames_org'} target='_blank' dangerouslySetInnerHTML={{ __html: TgSvgIcon || '' }} rel="noreferrer" />
          <a href={'https://twitter.com/Rait_io'} target='_blank' dangerouslySetInnerHTML={{ __html: XSvgIcon || '' }} rel="noreferrer" />
          <DropdownMenu
              title="Switch Network"
              columns={Object.values(WALLETS).map(item => {
                return {
                  label: item.name,
                  to: '',
                  render: (text: string) => {
                    return <Flex
                      justifyContent="center"
                      width="100%"
                      minWidth='100px'
                      cursor="pointer"
                      className={store.network === item.name ? 'selected' : ''}
                      onClick={async () => {
                        console.log(item)
                        dispatch(setNetwork(item.name))
                        localStorage.setItem('NETWORK', item.name)
                        localStorage.setItem(SessionStorageKey.WalletAuthorized, '')
                        dispatch(setWalletAddress(''))
                      }}
                    >
                      {text}
                    </Flex>
                  },
                }})
              }
            >
              <ConnectWalletButton>
                <Flex className='address' alignItems={'center'} gap='5px'>

                {store.network}
                <span style={{
                  display: 'flex',
                }} dangerouslySetInnerHTML={{ __html: menuDownSvgIcon || '' }} rel="noreferrer" />
                </Flex>
              </ConnectWalletButton>
          </DropdownMenu>
          <Toggle vIf={!store.walletAddress}>
            <ConnectWalletButton
              onClick={onConnect}
              // onClick={async () => {
              //   if (!unisatInstalled) {
              //     if(theme.isH5) {
              //       Notice.Info({title: 'Mobile version is not supported yet'})
              //       return;
              //     }
              //     window.open("https://unisat.io")
              //     return;
              //   }
              //   console.log(currentHooks)
              //   currentHooks.connect();
              //   // console.log(unisat)
              //   // connect()

              // }}
            >
              {
                unisatInstalled
                  ? 'Connect Wallet'
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
                    {store.walletAddress?.replace(store.walletAddress?.substring(5, 38), '...')}
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
                },
                {
                  label: 'NFT Box',
                  to: '/nft',
                },
                {
                  label: 'BLOG',
                  to: '/BLOG',
                  render: () => {
                    return    <a style={{  }} href={"https://medium.com/@rabbitgames"} target={"_blank"} className={`nav-item`} rel="noreferrer" >BLOG</a>
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


