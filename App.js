import './App.css';
import React, { useState } from 'react'
import DefaultRout from './DefaultRout'
// import CounterFuncComponent from './CounterFuncComponent';
// import CounterClassComponent from './CounterClassComponent';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

import Home from './Home/Home';
import Login from './login/Login';
import Signup from './login/Signup';
import Welcome from './Welcome';


function App() {
  
  const [counter, setcounter] = useState(0);

  const Increment = ()=>{
      setcounter(counter+1);
  }

  const Decrement = ()=>{
      setcounter(counter-1);
  }

  const Reset = ()=>{
      setcounter(0);
  }

  const CountByFive = ()=>{
      for(var i = 0; i<5; i++){
          setcounter((prevcounter)=>prevcounter+1);
      }
  }

  const mydata = {counter: counter, increment: Increment, decrement: Decrement, reset: Reset, incrementbyfive: CountByFive}

  console.log(mydata);
  const auth = JSON.parse(window.localStorage.getItem("Auth"));
 console.log(auth);
  return (
    <div className="App">
      <>
      {
        // <Router>
        //   <Switch>
        //     <Route path = "/login" exact component = {Login} />
        //     <Route path = "/signup" exact component = {Signup} />
        //     <Route path = "/home" exact component = {Home} />
        //     <Route path = "/" exact component = {Welcome} />
        //   </Switch>
        // </Router>
      }
        
      {
        auth.login ? (
        <Router>
          <Switch>
            <Route path = "/home" exact component = {Home} />
            <Route path = "/" exact component = {Welcome} />
            <Route component = {DefaultRout} />
          </Switch>
        </Router>
      ): (
        <Router>
          <Switch>
            <Route path = "/login" exact component = {Login} />
            <Route path = "/signup" exact component = {Signup} />
            <Route path = "/" exact component = {Welcome} />
            <Route component = {DefaultRout} />
          </Switch>
        </Router>
      )
    }
        
        

        {/* <CounterFuncComponent data = {mydata} /> */}
        {/* <CounterClassComponent counter = {counter} increment = {Increment} decrement = {Decrement} reset = {Reset} incrementbyfive = {CountByFive} /> */}
        
      </>
    </div>
  );
}

export default App;
