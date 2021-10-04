import './index.scss';
import React, { useContext, useEffect } from 'react';
import context from '../Context';
import classNames from 'classnames';
import 'remixicon/fonts/remixicon.css';

const App = (props) => {
  
  const state = useContext(context);
  const { topNum, setTopNum, setFocused, setCount, base, engine, setEngine } = state;
  const data = props.data;
  const onClick = (id) => {
    setFocused(0);
    setCount(0);
    setTopNum(id);
  }
  useEffect(() => {
  },[])
  return (
    <footer className="foot">
      foot
    </footer>
  );
}

App.defaultProps = {
  topNum: null,
  type: 'list',
};

export default App;
