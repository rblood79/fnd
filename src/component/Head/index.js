import './index.scss';
import React, { useContext, useEffect } from 'react';
import { Link } from "react-router-dom";
import context from '../Context';
import classNames from 'classnames';
import 'remixicon/fonts/remixicon.css';

const App = (props) => {
  
  const state = useContext(context);
  const { top, setTop, setFocused, setCount } = state;
  const data = props.data;
  const onClick = (id) => {
    setTop(id);
  }
  useEffect(() => {
  },[])
  return (
    <header className="head">
      F&D
       <Link to="/">Home</Link>
       <Link to="/about">About</Link>
    </header>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
