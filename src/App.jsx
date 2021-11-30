import Login from './login/Login';
//import Login2 from "./login2/src/Login";
import Home from "./login/Home";
import Dashboard from "./login/Dashboard";
import Homepage from "./pages/homepage/Homepage";
import HomepageDepartment from "./pages/homepagedept/Homepagedept";
import EditDetails from "./pages/EditDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  const currentUser = true;
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/">
          <Login2 />
        </Route> */}
        <Route exact path="/" component={Login} />
        <Route path="/Homepage">
          <Homepage />
        </Route>

        <Route path="/department">
          <HomepageDepartment />
        </Route>
        <Route path="/EditEmployee/editID/:id">
          <EditDetails />
        </Route>

        <Route path="/Homepagedept">
          <HomepageDepartment />
        </Route>
        <Route path="/Dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

/*
import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import Login from './Login';
import Home from './Home';
import Dashboard from './Dashboard';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/*function App() {
  return (
    <div className="App">
      <Login />
      
    </div>
  );
}

//export default App;

function App()
{
return(
<div className="App">
<h1>Login Page</h1>
<BrowserRouter>
  <Switch>

  <Route path="/Home" component={Home} /> 
    <Route path="/Login" component={Login} />
    <Route path="/Dashboard" component={Dashboard} />
  </Switch>
</BrowserRouter>
</div>
);
}

export default App;*/
