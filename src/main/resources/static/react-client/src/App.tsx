import React from 'react';
import './App.css';

import {  BrowserRouter, Route, Switch, RouteComponentProps  } from 'react-router-dom';
import DashBoard from "./components/Dashboard";
import Header from "./layout/Header";

const App : React.FunctionComponent<{}> = ()=> {
    return (
        <div>
            <Header/>
            <DashBoard name="dashboard"/>

        </div>)
};


export default App;
