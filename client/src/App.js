import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import Register from './components/auth/Register'
import Login from './components/auth/Login'

import AuthState from './context/auth/AuthState';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <AuthState>
      <Router>
        <div className="App">
          <Navbar />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={<HomePage/>}/>
              <Route exact path='/register' element={<Register/>}/>
              <Route exact path='/login' element={<Login/>}/>
            </Routes>
          </div>
        </div>
      </Router>
    </AuthState>
  );
}

export default App;
