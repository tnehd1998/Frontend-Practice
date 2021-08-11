import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Home from "../routes/Home";
import Movie from "../routes/Movie";
import TV from "../routes/TV";
import Header from "../components/Header";
import Search from "../routes/Search";
import Detail from "../routes/Detail";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movie" component={Movie} />
        <Route exact path="/tv" component={TV} />
        <Route exact path="/search" component={Search} />
        <Route exact path="/movie/:id" component={Detail} />
        <Route exact path="/tv/:id" component={Detail} />
        <Redirect from="*" to="/" />
      </Switch>
    </>
  </Router>
);
