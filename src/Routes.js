import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import TopBar from "./Components/TopBar";
import AdUpload from "./Pages/AdUpload";
import AdChart from "./Pages/AdChart";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ad_upload" component={AdUpload} />
          <Route exact path="/ad_chart" componet={AdChart} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
