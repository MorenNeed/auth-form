import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './pages/login';
import Registration from './pages/registration';
import './styles/standartTheme/index.css';

class AuthForm extends React.Component
{
  render()
  {
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/registration" element={<Registration/>}/>
        </Routes>
      </Router>
    );
  }
}

const Auth = ReactDOM.createRoot(document.getElementById("root"));

Auth.render(<AuthForm/>);