import React from "react"
import { Link } from "react-router-dom";

export default class LoginForm extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state =
        {
            name_input: '',
            pass_input: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event)
    {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState(
          {
            [name] : value
          });
    }
    handleSubmit(event)
    {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch("http://localhost:8000/api",
        {
            method: "POST",
            body: JSON.stringify(
                {
                    user: formData.get("name_input"),
                    password: formData.get("pass_input")
                }
            )
        })
        .then((response) =>
        {
          return response.json();
        })
        .then((data) =>
        {
          console.log(data);
        });
    }
    componentDidMount()
    {
        const form = document.getElementById('form');

        form.addEventListener('focusin', (event) => {
            const input = document.getElementById(event.target.name)
            for(const label of input.labels)
            {
                label.classList.add("LoginDivInput_anim")
            }
        });

        form.addEventListener('focusout', (event) => {
            const input = document.getElementById(event.target.name)
            for(const label of input.labels)
            {
                if(input.value === "")
                {
                    label.classList.remove("LoginDivInput_anim")
                }
            }
        });
    }
    render()
    {
        return(
            <form className="form" id="form" onSubmit={this.handleSubmit}>
                <div className="Name">
                    <label htmlFor="name_input" className="input_label">Username</label>
                    <input className="input" id="name_input" type="email" name="name_input" value={this.state.name_input} onChange={this.handleChange}></input>
                </div>
                <div className="Password">
                    <label htmlFor="pass_input"  className="input_label">Password</label>
                    <input className="input" id="pass_input" type="password" name="pass_input" value={this.state.pass_input} onChange={this.handleChange}></input>
                </div>
                <h2 id="forgot_pass"><Link>Forgot Password?</Link></h2>
                <div className="Submit">
                    <input className="input" id="submit_input" type="submit" name="submit_input" value="Log In" ></input>
                </div>
            </form>
        );
    }
}