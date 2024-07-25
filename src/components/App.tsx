import React, {useState} from 'react';
import * as classes from './App.module.scss';

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);

  return (
    <div>
      <h1 className={classes.heading}>{count}</h1>
      <button 
        className={classes.button} 
        onClick={increment}
      >
        increment
      </button>
    </div>
  );
};
