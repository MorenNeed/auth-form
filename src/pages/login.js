import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/standartTheme/login.css';

function Login()
{
    useEffect(() =>
    {
      document.title = "Login";
    });
    return (
      <div className="Login">
        <h1 id="Log_label">Login</h1>
        <form>
          <div className="Name">
            <label htmlFor="name_input">Username: </label>
            <input className="input" id="name_input" type="email"></input>
          </div>
          <div className="Password">
            <label htmlFor="pass_input">Password: </label>
            <input className="input" id="pass_input" type="password"></input>
          </div>
          <h2 id="forgot_pass"><Link>Forgot Password?</Link></h2>
        </form>
        {/* <button type="button"><Link to="/registration">Reg</Link></button> */}
      </div>
    );
}

export default Login;