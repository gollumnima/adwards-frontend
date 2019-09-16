import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Pages/Home";
import AdHome from "./Pages/AdHome";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/home" component={AdHome} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
