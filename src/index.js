import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/login.js';
import Registration from './pages/registration.js';
import './styles/index.css';

class AuthForm extends React.Component
{
  render()
  {
    return(
      <Router>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
      </Router>
    );
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(<AuthForm/>);