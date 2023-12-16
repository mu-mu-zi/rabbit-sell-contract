import { createSlice } from '@reduxjs/toolkit';
import { AccountInfo } from './typs';
import { WALLETS, WalletHooks, supportWallets } from '../connectWallet/WalletsNetwork';

export interface App {
  accountInfo: AccountInfo | undefined
  walletAddress: string
  network: supportWallets
}

const initialState: App = {
  accountInfo: JSON.parse(localStorage.getItem('accountInfo') || '{}') || undefined,
  walletAddress: localStorage.getItem('WALLET_AUTHORIZED') || '',
  // network: 'Ethereum',
  network: localStorage.getItem('NETWORK') as supportWallets || 'Ethereum',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAccountInfo: (state, action) => {
      state.accountInfo = action.payload;
    },
    setWalletAddress: (state, action) => {
      state.walletAddress = action.payload;
    },
    setNetwork: (state, action) => {
      state.network = action.payload;
    },
  },

});

export const {
  setAccountInfo, setWalletAddress, setNetwork
} = appSlice.actions;

export default appSlice.reducer;
