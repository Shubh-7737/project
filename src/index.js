import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import Event1 from './Event1';
import Event from './Event';
import App from './App';
import Artist from './Artist';
import Media1 from './Media1';
import Location from './Location';
import Navigation from './Navigation';
import Body from './Body';
import Login from './Login';
import About from './About';
import Signup from './Signup';
import reportWebVitals from './reportWebVitals';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
    <App/>
    <Navigation/>
    </BrowserRouter>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
