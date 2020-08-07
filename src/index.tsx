import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Page from "./components/Page";
import { CurrencyCode } from "./constants";

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" exact component={Page} />
      {CurrencyCode.map((currency: string) => (
        <Route key={currency} path={`/${currency}`} exact component={Page} />
      ))}
      <Route component={() => <h1>Not Fond Page 404</h1>} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
