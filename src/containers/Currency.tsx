import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Main from "../components/price";
import { Store } from "../constants";
import Helmet from "react-helmet";
import { useTranslation } from "react-i18next";
import Header from "components/header";
import { useRouteData } from "react-static";

export default () => {
  const { currency, language } = useRouteData();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language || "en");
  }, [i18n]);
  
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
      <Header currency={currency} />
      <Main
        price={Store.prices[currency]}
        timestamp={Store.timestamp}
        currency={currency}
        languageParam={language || "en"}
      />
    </Container>
  );
};
