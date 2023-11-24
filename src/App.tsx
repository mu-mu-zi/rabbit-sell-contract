import React from 'react';
import HomeIndex from './pages/Home/HomeIndex';
import {GlobalStyle} from "./Global.style";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <HomeIndex />
    </div>
  );
}

export default App;
