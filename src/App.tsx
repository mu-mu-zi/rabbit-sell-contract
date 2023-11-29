import React from 'react';
import HomeIndex from './pages/Home/HomeIndex';
import {GlobalStyle} from "./Global.style";
import Routers from './router/router';

export interface IResponseData<T> {
  code: number,
  data?: T,
  message: string,
  success: boolean
}
export interface IList<T> {
  page: number
  pageSize: number
  total: number
  list: T[]
}

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routers />
    </div>
  );
}

export default App;
