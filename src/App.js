import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes-navigation/Routes';
import NavBar from './routes-navigation/NavBar';
import JoblyApi from './api/api';
import UserContext from './UserContext'
import jwt from "jsonwebtoken";
import useLocalStorage from './hooks/useLocalStorage';


export const TOKEN_STORAGE_ID = "jobly-token";

function App() {

    const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);
    const [currentUser, setCurrentUser] = useState({});

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

    useEffect(function loadUserInfo() {  
        async function getCurrentUser() {
            if (token) {
                try {
                    let { username } = jwt.decode(token);
                    JoblyApi.token = token;
                    let currentUser = await JoblyApi.getCurrentUser(username);
                    setCurrentUser(currentUser);
                } catch (e) {
                    console.error("App loadUserInfo: problem loading", e);
                    console.log('catch')
                    setCurrentUser({});
                }
            }
        }
        getCurrentUser();
    }, [token]);

    function logout() {
      setCurrentUser(null);
      setToken(null);
    }

    return (
        <div>
            <BrowserRouter>
                <UserContext.Provider value={{ currentUser, setCurrentUser }}>
                    <NavBar logout={logout}/>
                    <Routes login={login} signup={signup}/>
                </UserContext.Provider>
          </BrowserRouter>
        </div>
    );
}


export default App;
