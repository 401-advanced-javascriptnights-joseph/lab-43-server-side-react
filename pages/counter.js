import {useState} from 'react';
import "../styles/counter.scss";
import React from 'react'
import Head from '../components/head'
import Nav from '../components/nav'

const Counter = (props) => {

  let [count, setCount] = useState(0);

  return (
     <>
       <Head title="Counter" />
       <Nav />
       <div id="counter">
       <button onClick={() => setCount( count + 1)}>+</button>
       <h2 id="circle">{count}</h2>
       <button onClick={() => setCount( count - 1)}>-</button>
       </div>
     </>
  );

};

export default Counter;
