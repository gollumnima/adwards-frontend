import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Home from "./Pages/Home";
import Main from "./Pages/Main";
import TopBar from "./Components/Bar";
import AdUpload from "./Pages/AdPages";
import WatchContent from "./Pages/Detail";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ad_upload" component={AdUpload} />
          <Route exact path="/watch" component={WatchContent} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
