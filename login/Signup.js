import React from 'react'
import {useState} from 'react'
import {Link} from 'react-router-dom';
import LoginLayout from './LoginLayout';

function Signup() {
    const [User, setUser] = useState({name: '', contact: '', email: '', pasword: ''});

    const setName = (e)=>{
        setUser({...User, name: e.target.value});
    }
    const setTell = (e)=>{
        setUser({...User, contact: e.target.value});
    }
    const setMail = (e)=>{
        setUser({...User, email: e.target.value});
    }
    const setPasword = (e)=>{
        setUser({...User, pasword: e.target.value});
    }

    const submitForm = (e)=>{
        e.preventDefault();
        if(User.name ==="" || User.contact ==="" || User.email ==="" || User.pasword ===""){
            alert("Please fil the form,..!");
        }
        else{
            setUser({name: User.name, tel: User.contact, email: User.email, password: User.pasword});
            console.log(User);
            let users = JSON.parse(window.localStorage.getItem("users"));
        
            let result = users.map((obj)=>obj.email===User.email).pop();
            if(result){
                alert("User Already Exists with Same E-mail,..!");
                window.location.replace("/login");
            }else{
                users.push(User);
                window.localStorage.setItem("users",JSON.stringify(users));
                window.localStorage.setItem("Auth",JSON.stringify({'login':true, 'user': User.name}));
                window.location.replace("/home");
            }   
        }
    }

    return (
        <LoginLayout>
            <div className = "signup-form-cont">
                <h2>Welcome to Signup Form:</h2>
                <form  onSubmit = {submitForm}>
                    <label>Name: </label>
                    <input type = "text" onChange = {setName}/>
                    <label>Tell: </label>
                    <input type = "tell" onChange = {setTell}/>
                    <label>E-mail: </label>
                    <input type = "mail" onChange = {setMail}/>
                    <label>Password: </label>
                    <input type = "password" onChange = {setPasword}/>
                    <button type = "submit">Signup</button>
                </form>
                <Link to = "/login">Login</Link>
            </div>
        </LoginLayout>
    )
}

export default Signup
