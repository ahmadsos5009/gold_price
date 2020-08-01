import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Layout } from "./components/Layout";
import { CurrencyCode } from "./constants";

ReactDOM.render(
  <Router>
    <Layout>
      <Switch>
        <Route path="/" exact component={() => <h1>Under Constraction</h1>} />
        {CurrencyCode.map((currency: string) => (
          <Route
            key={currency}
            path={`/${currency}`}
            exact
            component={() => <h1>Under Constraction</h1>}
          />
        ))}
        <Route component={() => <h1>Not Fond Page 404</h1>} />
      </Switch>
    </Layout>
  </Router>,
  document.getElementById("root")
);
