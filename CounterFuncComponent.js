import React from 'react';



function CounterFuncComponent(props) {
  return (
    <div>
        <h2>This is function component of counter</h2>
        
        <h1>Counter is: {props.data.counter}</h1>
        
        <button onClick = {props.data.increment}>Increment</button>
        <button onClick = {props.data.decrement}>Decrement</button>
        <button onClick = {props.data.reset}>Reset</button>
        <button onClick = {props.data.incrementbyfive}>increment by 5</button>
        
    </div>
  );
}

export default CounterFuncComponent;
