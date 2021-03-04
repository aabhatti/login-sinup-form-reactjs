import React from 'react';
import {useState} from 'react';
import {Link} from 'react-router-dom';
import LoginLayout from './LoginLayout';


function Login() {
  const [User, setUser] = useState({email: '', password: ''});

  const findEmail = (e)=>{
    setUser({...User, email:e.target.value});
  }
  const findPasword = (e)=>{
    setUser({...User, password:e.target.value});
  }

  const findUser = (e)=>{
    e.preventDefault();
    if(User.email==="" || User.password==="")
      alert("Please Fill the form!");
    else{
      let users = JSON.parse(window.localStorage.getItem("users"));
      let findUser = users.filter((obj)=>obj.email===User.email).pop();
      console.log(findUser);

      if(findUser){

        if(findUser.pasword===User.password){
          window.localStorage.setItem("Auth",JSON.stringify({'login':true, 'user': findUser.name}));
          window.location.replace('/home');
        }
        else
          alert("pasword incorrect!");
      }else
        alert("User not Found!");
    }
    
  }


  return (
    <LoginLayout>
      <div className = "login-form-cont">
          <h2>Welcome to Login Page:</h2>
          <form to = "/home" onSubmit = {findUser}>
              <label>E-mail: </label>
              <input type = "mail" onChange = {findEmail}/>
              <label>Password: </label>
              <input type = "password" onChange = {findPasword} />
              <button type = "submit">Login</button>
          </form>
          <Link to = "/signup">Signup</Link>
      </div>
    </LoginLayout>

  );
}

export default Login;