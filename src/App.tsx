import React from 'react';
import HomeIndex from './pages/Home/HomeIndex';
import {GlobalStyle} from "./Global.style";
import Routers from './router/router';


function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Routers />
    </div>
  );
}

export default App;
