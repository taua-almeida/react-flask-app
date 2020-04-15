import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from "./services/auth";

import Logon from './pages/Logon';
import Register from './pages/Register';
import Success from './pages/Success';
import Main from './pages/Main';

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? ( 
        <Component {...props} /> 
      ) : (
        <Redirect to={{ pathname: "/", state: {from: props.location } }} />
      )
    }
  />
);

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Logon}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/success" exact component={Success}/>
        <PrivateRoute path="/main" component={Main}/>
        <Route path="*" component={() => <h1>Page not found</h1>}/>
      </Switch>
    </BrowserRouter>
  )
}