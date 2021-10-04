import './index.scss';
//import React, { useContext, useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
//import context from '../Context';
//import classNames from 'classnames';
import 'remixicon/fonts/remixicon.css';

const App = (props) => {
  return (
    <header className="head">
      <Link className='logo' to="/">F&D</Link>
      <nav className='nav'>
        <NavLink className='navButton' exact to="/">홈</NavLink>
        <NavLink className='navButton' to="/about">회사소개</NavLink>
        <NavLink className='navButton' to="/service">사업분야</NavLink>
        <NavLink className='navButton' to="/partner">주요고객</NavLink>
        <NavLink className='navButton' to="/customer">견적의뢰</NavLink>
      </nav>
      <button>빠른상담</button>
    </header>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
