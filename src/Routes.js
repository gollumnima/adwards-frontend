import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import TopBar from "./Components/TopBar";
import AdUpload from "./Pages/AdUpload";
import AdGraph from "./Pages/AdGraph";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ad_upload" component={AdUpload} />
          <Route exact path="/ad_graph" component={AdGraph} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
