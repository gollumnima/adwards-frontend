import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./Pages/Main";
import TopBar from "./Components/TopBar";
import AdUpload from "./Pages/AdUpload";
import AdVideoForm from "./Pages/AdVideoForm";
import AdQuizForm from "./Pages/AdQuizForm";
import AdMoney from "./Pages/AdMoney";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <TopBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/ad_upload" component={AdUpload} />
          <Route exact path="/ad_video" component={AdVideoForm} />
          <Route exact path="/ad_quiz" component={AdQuizForm} />
          <Route exact path="/ad_money" component={AdMoney} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
