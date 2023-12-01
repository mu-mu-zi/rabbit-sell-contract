import { createSlice } from '@reduxjs/toolkit';
import { AccountInfo } from './typs';

export interface App {
  accountInfo: AccountInfo | undefined
  walletAddress: string
}

const initialState: App = {
  accountInfo: JSON.parse(localStorage.getItem('accountInfo') || '{}') || undefined,
  walletAddress: localStorage.getItem('WALLET_AUTHORIZED') || '',
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
    }
  },

});

export const {
  setAccountInfo, setWalletAddress
} = appSlice.actions;

export default appSlice.reducer;
