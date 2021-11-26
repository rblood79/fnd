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
        <NavLink className='navButton' exact to="/">시작</NavLink>
        <NavLink className='navButton' to="/service">사업</NavLink>
        <NavLink className='navButton' to="/about">소개</NavLink>
        <NavLink className='navButton' to="/customer">문의</NavLink>
      </nav>
    </header>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
