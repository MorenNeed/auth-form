import React from "react"
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component
{
    render()
    {
        return(
            <form>
                <div className="Name">
                    <label htmlFor="name_input">Username</label>
                    <input className="input" id="name_input" type="email"></input>
                </div>
                <div className="Password">
                    <label htmlFor="pass_input">Password</label>
                    <input className="input" id="pass_input" type="password"></input>
                </div>
                <h2 id="forgot_pass"><Link>Forgot Password?</Link></h2>
            </form>
        );
    }
}