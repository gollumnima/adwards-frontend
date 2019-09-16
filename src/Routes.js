import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Pages/Home";
import AdHome from "./Pages/AdHome";
import TopBar from "./Components/TopBar";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={AdHome} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
