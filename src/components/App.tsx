import React, {useState} from 'react';
import { Link, Outlet } from 'react-router-dom';
import * as classes from '@/components/App.module.scss';
import catPng from '@/assets/cat.png';
import catAvif from '@/assets/cat.avif';
import catJpeg from '@/assets/cat.jpeg';
import catJpg from '@/assets/cat.jpg';
import butterflyWebp from '@/assets/butterfly.webp';
import PenguinSvg from '@/assets/penguin.svg';
import ReactSvg from '@/assets/react-16.svg';
import JsSvg from '@/assets/js.svg';
import HtmlSvg from '@/assets/html.svg';

function todo() {
  console.log('todo function');
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => setCount(prev => prev + 1);

  // todo();
  // if(__PLATFORM__ === 'desktop') {
  //   return <div>Is Desktop Platform</div>
  // }

  // if(__PLATFORM__ === 'mobile') {
  //   return <div>Is Mobile Platform</div>
  // }

  // if(__ENV__ === 'development') {
  //   return <div>Is Dev</div>
  // }

  // if(__ENV__ === 'production') {
  //   return <div>Is Prod</div>
  // }

  return (
    <div>
      <h1>PLATFORM: {__PLATFORM__}</h1>
      <h3>ENV: {__ENV__ === 'development' ? 'Is dev version' : 'Is prod version'}</h3>
      <div>
        <img src={catPng} width={200} height={200} alt='cat'/>
        <img src={catAvif} width={300} height={200} alt='cat'/>
        <img src={catJpeg} width={230} height={200} alt='cat'/>
        <img src={catJpg} width={200} height={200} alt='cat'/>
        <img src={butterflyWebp} width={200} height={200} alt='butterfly'/>
      </div>
      <div>
        <PenguinSvg width={100} height={100}/>
        <ReactSvg color={'red'} width={100} height={100}/>
        <JsSvg color={'#efd81d'} width={100} height={100}/>
        <HtmlSvg color={'#e96228'} width={100} height={100}/>
      </div>
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
