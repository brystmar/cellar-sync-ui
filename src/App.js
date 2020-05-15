import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header";
import CellarDisplay from "./components/CellarDisplay";

function App() {
    return (
        <div className="app-container">
            <Header userName="Berg"/>
            <div className="content-container">
                <Switch>
                    <Route exact path="/">
                        <CellarDisplay userName="Berg"/>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
