import React from "react";
import { isAuthenticated } from "./services/auth";
import { BrowserRouter, Switch, Redirect, Route } from "react-router-dom";

import home from "./pages/home";
import login from "./pages/login";
import registrar from "./pages/registrar";
import app from "./pages/app";

import busca from "./pages/busca";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={home} />

        <Route path="/login" component={login} />
        <Route path="/registrar" component={registrar} />

        <PrivateRoute exact path="/app" component={app} />

        <Route path="/*" component={busca} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
