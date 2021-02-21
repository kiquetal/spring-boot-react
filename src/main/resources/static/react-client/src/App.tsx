import React from 'react';
import './App.css';

import {  BrowserRouter as Router, Route, Switch, RouteComponentProps  } from 'react-router-dom';
import DashBoard from "./components/Dashboard";
import Header from "./layout/Header";
import AddProject from "./components/project/AddProject";

const App : React.FunctionComponent<{}> = ()=> {
    return (

        <div>
            <Header/>
            <Router>

            <Route exact path="/" component={DashBoard}/>
            <Route exact path="/addProject">
                <AddProject/>
            </Route>
            </Router>
        </div>
)
};


export default App;
