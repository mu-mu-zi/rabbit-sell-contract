import React, { useState } from "react";
import Notice from "../Components/Notification";
import { WalletHooks } from "../connectWallet/WalletsNetwork";
import { SessionStorageKey } from "../Components/Heder";
import { setWalletAddress } from "../store/app";
import { useAppDispatch } from "./hooks";

export default function useConnectMask():WalletHooks {
  const provider = (window as any).ethereum;
  const [account, setAccount] = useState<string>('');
  const dispatch = useAppDispatch()
  async function connectWallet() {
    console.log('aaaaaaa1123123')
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    console.log('accounts', accounts)
    localStorage.setItem(SessionStorageKey.WalletAuthorized, accounts[0])
    dispatch(setWalletAddress(accounts[0]))
    setAccount(accounts[0])
    return accounts[0]
  }

  async function getBalance() {
    console.log('aaaaaaa1123123')
    const accounts = await provider.request({ method: 'eth_requestAccounts' });
    console.log('accounts', accounts)
    return accounts[0]
  }



  return {
    address: account || '',
    chains: 1,
    name: 'Ethereum',
    getBalance: getBalance,
    haveWallet: (() => {
      if(provider) {
        return true
      } else {
        return false
      }
    })(),
    connect: connectWallet,
  }
}