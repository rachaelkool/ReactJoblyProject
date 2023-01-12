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
    const [currentUser, setCurrentUser] = useState(null);
    const [applicationIds, setApplicationIds] = useState([]);


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
                    setApplicationIds(new Set(currentUser.applications));
                } catch (e) {
                    console.error("App loadUserInfo: problem loading", e);
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

    function applyToJob(id) {
        if (hasAppliedToJob(id)) return;
        JoblyApi.applyToJob(currentUser.username, id);
        setApplicationIds(new Set([...applicationIds, id]));
    }

    function hasAppliedToJob(id) {
        return applicationIds.has(id);
    }

    return (
        <div>
            <BrowserRouter>
                <UserContext.Provider value={{ currentUser, setCurrentUser, hasAppliedToJob, applyToJob }}>
                    <NavBar logout={logout}/>
                    <Routes login={login} signup={signup}/>
                </UserContext.Provider>
          </BrowserRouter>
        </div>
    );
}


export default App;
