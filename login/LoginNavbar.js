import React from 'react';
import {Link} from 'react-router-dom'

function LoginNavbar() {
  return (
    <div>
        <header className = "header-navbar">
        <Link to = "/home"><h1>Kinectro</h1></Link>
            <nav className = "nav-bar-cont">
                <Link to = "/login" className = "nav-item">Login</Link>
                <Link to = "/signup" className = "nav-item">Signup</Link>
            </nav>
        </header>
    </div>
  );
}

export default LoginNavbar;
