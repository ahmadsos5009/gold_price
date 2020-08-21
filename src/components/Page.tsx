import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Main from "../price";
import { Store } from "../constants";
import { RouteComponentProps, withRouter } from "react-router-dom";
//@ts-ignore
import Helmet from "react-meta-tags";
import { ReactSEOMetaTags } from "react-seo-meta-tags";

const Page: React.FC<RouteComponentProps> = ({ location }) => {
    const currency = location.pathname === "/" ? "USD" : location.pathname.replace("/", "");

    return (
      <Container fluid={"md"}>
        <ReactSEOMetaTags website={{ title: "title test",description: "Test hhhhh"}} />
        <Helmet>
          <link
            rel="alternate"
            hrefLang="ar"
            href={`https://gold-price.ga${location.pathname}?ara`}
          />
          <link
            rel="alternate"
            hrefLang="zh"
            href={`https://gold-price.ga${location.pathname}?zho`}
          />
          <link
            rel="alternate"
            hrefLang="fr"
            href={`https://gold-price.ga${location.pathname}?fra`}
          />
          <link
            rel="alternate"
            hrefLang="de"
            href={`https://gold-price.ga${location.pathname}?deu`}
          />
        </Helmet>
        <Header />
        <Main
          price={Store.prices[currency]}
          timestamp={Store.timestamp}
          currency={currency}
          languageParam={location.search.replace("?", "")}
        />
      </Container>
    );
}

export default withRouter(Page);
