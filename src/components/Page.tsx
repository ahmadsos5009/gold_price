import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Main from "../price";
import { Store } from "../constants";
import Helmet from "react-helmet";

interface PageProps{
  language?: string
  currency?: string
}

const Page: React.FC<PageProps> = ({ language = "en", currency = "USD" }) => {    
    return (
      <Container fluid={"md"}>
        <Helmet>
          <link
            rel="alternate"
            hrefLang="ar"
            href={`https://gold-price.ga${currency}/ara`}
          />
          <link
            rel="alternate"
            hrefLang="zh"
            href={`https://gold-price.ga${currency}/zho`}
          />
          <link
            rel="alternate"
            hrefLang="fr"
            href={`https://gold-price.ga${currency}/fra`}
          />
          <link
            rel="alternate"
            hrefLang="de"
            href={`https://gold-price.ga${currency}/deu`}
          />
        </Helmet>
        <Header currency={currency}/>
        {/* <Main
          price={Store.prices[currency]}
          timestamp={Store.timestamp}
          currency={currency}
          languageParam={language}
        /> */}
      </Container>
    );
}

export default Page;
