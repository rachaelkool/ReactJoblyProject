import React from 'react';
import './App.css';
import { BrowserRouter } from "react-router-dom";
import Routes from './routes-navigation/Routes';
import NavBar from './routes-navigation/NavBar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes />
      </BrowserRouter>
    </div>
  );
}


export default App;
