import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import {
  AnimatedMulti,
  CustomStylesMulti,
  CustomStylesSingle,
  FixedOptions,
  GettingStarted,
  Grouped,
  MultiSelect,
  SingleSelect,
} from "./components";

function App() {
  return (
    <Router>
      <Link to="/getting-started">Getting Started</Link>
      <br />
      <Link to="/single">Single</Link>
      <br />
      <Link to="/multi">Multi</Link>
      <br />
      <Link to="/grouped">Grouped</Link>
      <br />
      <Link to="/animation">Animation</Link>
      <br />
      <Link to="/customstylessingle">Custom Styles - Single</Link>
      <br />
      <Link to="/customstylesmulti">Custom Styles - Multi</Link>
      <br />
      <Link to="/fixedoptions">Fixed Options</Link>
      <Switch>
        <Route path="/getting-started" component={GettingStarted} />
        <Route path="/single" component={SingleSelect} />
        <Route path="/multi" component={MultiSelect} />
        <Route path="/grouped" component={Grouped} />
        <Route path="/animation" component={AnimatedMulti} />
        <Route path="/customstylessingle" component={CustomStylesSingle} />
        <Route path="/customstylesmulti" component={CustomStylesMulti} />
        <Route path="/fixedoptions" component={FixedOptions} />
      </Switch>
    </Router>
  );
}

export default App;
