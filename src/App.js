import React, { useState } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes-navigation/Routes';
import NavBar from './routes-navigation/NavBar';
import JoblyApi from './api/api';


function App() {

    const [token, setToken] = useState('')

    async function login(loginData) {
        try {
            let token = await JoblyApi.login(loginData);
            setToken(token);
            return { success: true };
        } catch (e) {
            console.error("login failed", e);
          return { success: false, e };
        }
    }

    async function signup(signupData) {
      try {
        let token = await JoblyApi.signup(signupData);
        setToken(token);
        return { success: true };
      } catch (e) {
        console.error("signup failed", e);
        return { success: false, e };
      }
    }

    return (
        <div>
            <BrowserRouter>
              <NavBar />
              <Routes login={login} signup={signup}/>
          </BrowserRouter>
        </div>
    );
}


export default App;
