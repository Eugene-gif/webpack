import React, {useState} from 'react';
import * as classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <Link to={'/about'}>about</Link>
      <br/>
      <Link to={'/shop'}>shop</Link>
      <h1 className={classes.heading}>{count}</h1>
      <button 
        className={classes.button} 
        onClick={increment}
      >
        increment
      </button>
      <Outlet/>
    </div>
  );
};
