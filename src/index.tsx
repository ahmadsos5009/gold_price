import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import { hydrate, render } from "react-dom";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Page from "./components/Page";
import { CurrencyCode } from "./constants";
import './i18n';
import Currencys from "./components/Currencys";

const App = (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Page} />
      {CurrencyCode.map((currency: string) => (
        <Route key={currency} path={`/${currency}`} exact component={Page} />
      ))}
      <Route path="/currencys" exact component={Currencys} />
      <Route component={() => <h1>Not Fond Page 404</h1>} />
    </Switch>
  </BrowserRouter>
);

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(App, rootElement);
} else {
  render(App, rootElement);
}