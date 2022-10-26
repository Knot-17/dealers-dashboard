import React from "react";

import { Route, Switch } from "react-router-dom";

import Dashboard from "../Screens/Dashboard";
import Customer from "../Screens/Customer";
import Analytics from "../Screens/Analytics";
import Events from "../Screens/Events";
import Profile from "../Screens/Profile";
import UpdateEvents from "../Screens/UpdateEvents";

function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/customers" component={Customer} />
      <Route path="/solar_analytics" component={Analytics} />
      <Route path="/events" component={Events} />
      <Route path="/update" component={UpdateEvents} />
      <Route path="/profile" component={Profile} />
    </Switch>
  );
}

export default Routes;
