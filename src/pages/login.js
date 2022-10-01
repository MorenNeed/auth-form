import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import '../styles/standartTheme/login.css';

import {LoginForm} from "../components/exports.js"

function Login()
{
    useEffect(() =>
    {
      document.title = "Login";
    });
    return (
      <div className="Login">
        <h1 id="Log_label">Login</h1>
        <LoginForm/>
        {/* <button type="button"><Link to="/registration">Reg</Link></button> */}
      </div>
    );
}

export default Login;