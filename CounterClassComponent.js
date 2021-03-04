import React from 'react';


class CounterFuncComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }
    


  render() {
    return (
        <div>
        <h2>This is Class component of counter</h2>
        
        <h1>Counter is: {this.props.counter}</h1>
        
        <button onClick = {this.props.increment}>Increment</button>
        <button onClick = {this.props.decrement}>Decrement</button>
        <button onClick = {this.props.reset}>Reset</button>
        <button onClick = {this.props.incrementbyfive}>increment by 5</button>
        
    </div>
    )
  }
    
}

export default CounterFuncComponent;
