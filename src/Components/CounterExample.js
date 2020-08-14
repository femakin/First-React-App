import React, { useState } from 'react';
//import React from 'react';
//import logo from './logo.svg';
//import './App.css';
//import HelloWorld from './Components/HelloWorld'

function CounterExample() {
   const [count, setCount] = useState(0)



  return (
   <div>
  {/* <HelloWorld firstname = "Femi"   /> */}
  <h1>{count}</h1>
  <h1 onClick={() => setCount(count + 1)} >
    Plus
  </h1>
  <h1 onClick={() => setCount(count - 1)} >
    Minus
  </h1>
  <h1 onClick={() => setCount(count * 2)} >
    Multiplication
  </h1>
   </div>
  );
}

export default CounterExample;
 