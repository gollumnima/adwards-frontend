import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import WatchContent from "./Pages/Detail";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";
import TopBar from "./Components/TopBar";
import AdUpload from "./Pages/AdUpload";
import AdGraph from "./Pages/AdGraph";
import BizMain from "./Pages/BizMain";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ad_upload" component={AdUpload} />
          <Route exact path="/watch" component={WatchContent} />
          <Route exact path="/Signup" component={Signup} />
          <Route exact path="/Login" component={Login} />
          <Route exact path="/ad_graph" component={AdGraph} />
          <Route exact path="/biz_main" component={BizMain} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
