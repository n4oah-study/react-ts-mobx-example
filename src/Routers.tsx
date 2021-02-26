import React from "react";
import { Route, Switch } from "react-router";
import Home from "./pages/Home";

const Routers: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={Home} />
    </Switch>
  );
};

export default Routers;
