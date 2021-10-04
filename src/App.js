//import React, { useEffect, useState } from 'react';
import { Route } from "react-router-dom";
import './App.scss';
//import { isMobile } from 'react-device-detect';
import Head from './component/Head/';
import Foot from './component/Foot/';

import Home from './page/Home';
import About from './page/About/';
import Service from './page/Service/';
import Partner from './page/Partner/';
import Customer from './page/Customer/';

const App = (props) => {
  //const { uid } = props.match.params;

  return (
    <div className="App">
      <Head />
      <main className='main'>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/service" component={Service} />
        <Route path="/partner" component={Partner} />
        <Route path="/customer" component={Customer} />
      </main>
      <Foot />
    </div>
  );
}

export default App;
