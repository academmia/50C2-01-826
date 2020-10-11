import React from 'react';
import { Route, Switch } from "react-router-dom";

import "../styles/taskker.css";
import './App.css';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

const App = () => {
  return (
    <Switch>
      <Route>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/profile" component={ProfilePage} />
      </Route>
    </Switch>
  );
}

export default App;
