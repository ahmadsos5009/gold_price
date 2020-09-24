import React, { useState, useCallback } from 'react'
import Helmet from "react-helmet";
import styled from 'styled-components';
import { Container, Row, Col, ButtonGroup, Button } from 'react-bootstrap';
import { CountryCode, History } from '../../constants';
import PriceTable from './PriceTable';
import PriceWeight from './PriceWeight';
import Welcome from './Welcome';
import PriceTag from './PriceTag';
import ChartsPage from "../graph/Chart";
import CountryData from "country-data";
import { useTranslation } from "react-i18next";
import CountryDictionary from '../../constants/languages/country';
import CurrencyDictionary from '../../constants/languages/currency';
import { Link } from "@reach/router";

interface Main {
    price: number,
    timestamp: number,
    currency: string,
    languageParam: string
}

enum Wight {
    gram = 'gram',
    ounce = 'ounce',
    kilo = 'kilo'
}

const StyledContainer = styled(Container)`
   background-color: #f5f5fa;
`;

const StyledDate = styled.span`
  font-size: 12px;
`;

const Header = styled.h1`
  font-family: Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;
  line-height: 1.3!important;
  font-size: 1.9rem;
  font-weight: 700;
`

const StyledLink = styled(Link)`
  color: #343a40;
  font-weight: 400;
`;

const Main: React.FC<Main> = ({ price, timestamp, currency, languageParam }) => {
    let countryCurrency = CountryData.currencies[currency].name;
    const code = CountryData.currencies[currency].code;
    const countryCode = CountryCode[code];
    let countryName = CountryData.countries[countryCode].name;
    const countryEmoji = CountryData.countries[countryCode].emoji;
    const currencySymbol = CountryData.currencies[currency].symbol;
    const updatedTime = new Date((timestamp * 1000)).toUTCString();
    const language: string = CountryData.countries[countryCode].languages[0] || 'en'
    const [t] = useTranslation('translations');

    const [wight, setWight] = useState('gram');
    const [wightPrice, setWightPrice] = useState(price);
    const [history, setHistory] = useState(History.data[currency]);

    const handleWightClick = useCallback((e: any) => {
        e.preventDefault();
        setWight(e.currentTarget.value);
        switch (e.currentTarget.value) {
            case Wight.gram:
                setWightPrice(price);
                setHistory(History.data[currency]);
                return;
            case Wight.ounce:
                setWightPrice((price * 31.103));
                setHistory(History.data[currency].map((price: number) => (price * 31.103)));
                return;
            case Wight.kilo:
                setWightPrice((price * 1000));
                setHistory(History.data[currency].map((price: number) => (price * 1000)));
                return;
        }
    }, [currency, price]);

    //@ts-ignore
    if (language !== "en" && CountryDictionary[languageParam]) {
      //@ts-ignore
      countryName = CountryDictionary[languageParam][countryCode];
      //@ts-ignore
      countryCurrency = CurrencyDictionary[languageParam][code];
    }

    const gramPrice = price.toFixed(2) 
    const ouncePrice = (price * 31.103).toFixed(2)
    const kiloPrice = (price * 1000).toFixed(2);
    
    return (
      <StyledContainer fluid>
        <Helmet>
          <title>{t("metaTitle", { countryName })}</title>
          <meta
            name="description"
            content={t("metaDescription", { countryName, countryCurrency })}
          />
          <meta
            name="Keywords"
            content={t("metaKeywords", { countryName, countryCurrency })}
          />
          <meta property="og:url" content={`https://gold-price.ga/${code}`} />
          <meta
            property="og:description"
            content={t("metaOGDescription", {
              countryName,
              countryCurrency,
              code,
              ouncePrice,
              gramPrice,
              kiloPrice,
              updatedTime,
            })}
          />
          <meta property="og:title" content={t("metaTitle", { countryName })} />
          <meta property="og:type" content="product" />
          <meta property="og:image" content="https://gold-price.ga/log.svg" />
        </Helmet>
        <br />
        <br />
        <Header>
          {t("header", { countryName })} {countryEmoji}
        </Header>
        <Row>
          <Col xs={16} md={4}>
            <PriceTag
              previousPrice={history[history.length - 2]}
              currentPrice={wightPrice}
              symbol={currencySymbol}
            />
            <ButtonGroup>
              <Button
                variant="outline-dark"
                value={Wight.gram}
                active={wight === Wight.gram}
                onClick={handleWightClick}
              >
                {t("gram")}
              </Button>
              <Button
                variant="outline-dark"
                value={Wight.ounce}
                active={wight === Wight.ounce}
                onClick={handleWightClick}
              >
                {t("ounce")}
              </Button>
              <Button
                variant="outline-dark"
                value={Wight.kilo}
                active={wight === Wight.kilo}
                onClick={handleWightClick}
              >
                {t("kilo")}
              </Button>
            </ButtonGroup>
          </Col>
          <Col>
            <br />
            <StyledDate className="mr-auto">
              {t("update", { updatedTime })}
            </StyledDate>
          </Col>
        </Row>
        <br />
        <br />
        <Row className={"show-grid"}>
          <Col xs={16} md={4}>
            <PriceTable price={wightPrice} countryCurrency={countryCurrency} />
          </Col>
          <Col xs={12} md={4}>
            <PriceWeight price={price} />
          </Col>
        </Row>
        <Row className={"show-grid"}>
          <Col xs={12} md={8}>
            <ChartsPage
              dates={History.date}
              data={history}
              price={wightPrice}
              previousPrice={history[history.length - 2]}
            />
          </Col>
        </Row>
        <br />
        <br />
        <br />
        <br />
        <Row className={"show-grid"}>
          <Col>
            <Welcome />
          </Col>
        </Row>
        <hr />
        <br />
        <StyledLink to="/currencies">{t("currenciesPage")}</StyledLink>
        <br />
        <br />
      </StyledContainer>
    );
}

export default Main;

