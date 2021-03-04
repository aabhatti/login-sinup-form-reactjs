import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
  const clearAuth = async ()=>{
    await window.localStorage.setItem("Auth",JSON.stringify({'login':false, 'user': ""}));
    window.location.replace("/");
  }
  return (
    <div>
        <header className = "header-navbar">
            <Link to = "/home"><h1>Kinectro</h1></Link>
            <nav className = "nav-bar-cont">
                <Link to = "/home" className = "nav-item">Home</Link>
                <button className = "nav-item" onClick = {clearAuth}>Logout</button>
            </nav>
        </header>
    </div>
  );
}

export default Navbar;
