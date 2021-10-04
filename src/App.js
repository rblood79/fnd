import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import classNames from 'classnames';
import './App.scss';
//import { isMobile } from 'react-device-detect';
import Head from './component/Head/';
import Foot from './component/Foot/';

import Home from './page/Home';
import About from './page/About/';

const App = (props) => {
  //const { uid } = props.match.params;
  useEffect(() => {

  }, []);

  return (
    <div className="App">
      <Head />
      <main>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
      </main>
      <Foot />
    </div>
  );
}

export default App;
