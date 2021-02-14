import React from 'react';

import {  BrowserRouter, Route, Switch, RouteComponentProps  } from 'react-router-dom';
import DashBoard from "./components/Dashboard";

const App : React.FunctionComponent<{}> = ()=> {
    return (
        <div>
            <DashBoard name="dashboard"/>

        </div>)
};


export default App;
