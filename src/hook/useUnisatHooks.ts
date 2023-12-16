import React, { useState } from "react";
import Notice from "../Components/Notification";
import { WALLETS, WalletHooks } from "../connectWallet/WalletsNetwork";
import { SessionStorageKey } from "../Components/Heder";
import { setWalletAddress } from "../store/app";
import { useAppDispatch } from "./hooks";

export default function useConnectUniset():WalletHooks {
  const unisat = (window as any).unisat;
  const [account, setAccount] = useState<string>('');
  const dispatch = useAppDispatch()
  async function connectWallet() {
    console.log('aaaaaaa1123123')
    const accounts = await unisat.requestAccounts();
    console.log('accounts', accounts)
    localStorage.setItem(SessionStorageKey.WalletAuthorized, accounts[0])
    dispatch(setWalletAddress(accounts[0]))
    setAccount(accounts[0])
    return accounts[0]
  }
  async function getBalance() {
    console.log('aaaaaaa1123123')
    const balance = await unisat.getBalance();
    return balance
  }

  // const [address] = unisat.getAccounts();
  // const network = unisat.getNetwork();
  // const balance = unisat.getBalance();
  // const publicKey = unisat.getPublicKey()
  return {
    address: account || '',
    chains: 2,
    getBalance: getBalance,
    name: 'Bitcoin',
    haveWallet: (() => {
      if(unisat) {
        return true
      } else {
        return false
      }
    })(),
    connect: connectWallet,
    
  }
}