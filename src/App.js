import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/Albums" component={Home}></Route>
        <Redirect from="/" to="/Albums"></Redirect>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
