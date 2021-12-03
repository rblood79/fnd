import './index.scss';
//import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
//import context from '../Context';
//import classNames from 'classnames';
import 'remixicon/fonts/remixicon.css';

const App = (props) => {
  return (
    <header className="head">
      <Link className='logo' to="/"><img src={require("../../images/logo.svg").default} alt='FNDSOFT' /></Link>
      <nav className='nav'>
        <a className='navButton' href="/">시작</a>
        <a className='navButton' href="#service">사업</a>
        <a className='navButton' href="#about">소개</a>
        <a className='navButton' href="#contect">문의</a>
      </nav>
    </header>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
