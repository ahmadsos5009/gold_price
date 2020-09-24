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
          <title>{trans[languageParam].metaTitle(countryName, countryCode)}</title>
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

const trans: any = {     
  en: {
    metaTitle: (countryName: string, code: string) =>
      `Gold Price in ${countryName} - Ounce Gram Kilo Gold Rate in ${code}`,
    metaDescription:
      "Gold rate in {{countryName}}. Current price of Ounce Gram Kilo is available in {{countryCurrency}} in 24k, 22k, 21k, 18k",
    metaKeywords: `ounce gold rates in {{countryName}},  gram gold rates in {{countryName}}, kilo gold rates in {{countryName}}, 
      gold price in {{countryCurrency}}, gold price per ounce in , today ounce gold rate in {{countryName}} , 
      22k 21k 24k 20k 18k 14k gold price in  {{countryCurrency}} in {{countryName}}, 
      gold price today in {{countryName}}, gold stock price, 24k gold price per gram, 18k gold /gram price, 21k gold price per gram, 21k gold /gram price 24k gold /gram price`,
    metaOGDescription: `Gold Price in {{countryName}}. Current price of Ounce Gram Kilo is available in {{countryCurrency}} in 24k, 22k, 23k, 21k, 20k, 18k .   
      We are providing the latest rates in the current exchange rate of {{countryCurrency}}.  
      Today gold price per Ounce =  {{ouncePrice}} {{code}}, Today gold price per Gram =  {{gramPrice}} {{code}}, Today gold price per Kilo =  {{kiloPrice}} {{code}}, updated at {{updatedTime}}.`,
  },
ara: {
    metaTitle: (countryName: string, code: string) =>
      `سعر الذهب في ${countryName} - ${code} سعر أوقية جرام كيلو الذهب في`,
    metaDescription:
      "سعر الذهب في {{countryName}}. السعر الحالي للجرام أوقية كيلو متاح في {{countryCurrency}} في 24 قيراط ، 22 قيراط ، 21 ك ، 18 قيراط",
    metaKeywords: `أسعار أوقية الذهب في {{countryName}},  أسعار جرام الذهب في {{countryName}}, أسعار كيلو الذهب في {{countryName}}, 
      سعر الذهب في {{countryCurrency}}, سعر أونصة الذهب , اليوم سعر أوقية الذهب في {{countryName}} , 
      سعر الذهب عيار 22 قيراطًا عيار 24 قيراطًا عيار 18 في  {{countryCurrency}} في {{countryName}}, 
      سعر الذهب اليوم بـ {{countryName}}, سعر سهم الذهب , سعر جرام الذهب عيار 24 , سعر الذهب عيار 18 للجرام ، سعر الذهب عيار 21 للجرام ، سعر الذهب عيار 21 للجرام سعر الذهب عيار ٢٤ / الجرام`,
    metaOGDescription: `سعر الذهب في {{countryName}}. السعر الحالي للجرام أوقية كيلو متاح في {{countryCurrency}} في 24 قيراط ، 22 قيراط ، 23 قيراطًا ، 21 ك ، 20 قيراطًا ، 18 قيراطًا .   
      نحن نقدم أحدث الأسعار بسعر الصرف الحالي لـ {{countryCurrency}}.  
      سعر أوقية الذهب اليوم =  {{ouncePrice}} {{code}}, سعر جرام الذهب اليوم =  {{gramPrice}} {{code}}, اليوم سعر الذهب للكيلو =  {{kiloPrice}} {{code}}, تم التحديث في {{updatedTime}}.`,
  },
deu: {
    metaTitle: (countryName: string, code: string) =>
      `Goldpreis in ${countryName} - Unze Gramm Kilo Gold Rate in ${code}`,
    metaDescription:
      "Goldpreis in {{countryName}}. Der aktuelle Preis für Unzen Gramm Kilo ist in {{countryCurrency}} in 24.000, 22.000, 21.000, 18.000 verfügbar",
    metaKeywords: `Unzen Goldraten in {{countryName}}, Gramm Goldraten in {{countryName}}, Kilogoldraten in {{countryName}},
        Goldpreis in {{countryCurrency}}, Goldpreis pro Unze in, heute Unzen Goldpreis in {{countryName}},
        22.000 21.000 24.000 20.000 18.000 14.000 Goldpreis in {{countryCurrency}} in {{countryName}},
        Goldpreis heute in {{countryName}}, Goldaktienpreis, 24.000 Goldpreis pro Gramm, 18.000 Gold / Gramm Preis, 21.000 Goldpreis pro Gramm, 21.000 Gold / Gramm Preis 24.000 Gold / Gramm Preis`,
    metaOGDescription: `Goldpreis in {{countryName}}. Der aktuelle Preis für Unzen Gramm Kilo ist in {{countryCurrency}} in 24.000, 22.000, 23.000, 21.000, 20.000, 18.000 verfügbar.
       Wir bieten die neuesten Kurse zum aktuellen Wechselkurs von {{countryCurrency}}.
       Heute Goldpreis pro Unze = {{ouncePrice}} {{code}}, Heute Goldpreis pro Gramm = {{gramPrice}} {{code}}, Heute Goldpreis pro Kilo = {{kiloPrice}} {{code}} , aktualisiert um {{updatedTime}}.`,
  },
fra: {
  metaTitle: (countryName: string, code: string) =>
  `Taux de l'or en ${countryName}. Le prix actuel de l'Ounce Gram Kilo est disponible en ${code} en 24k, 22k, 21k, 18k`,
metaDescription:
  "Taux de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 21k, 18k",
metaKeywords: `taux de l'once d'or en {{countryName}}, taux du gramme d'or en {{countryName}}, taux du kilo d'or en {{countryName}},
   prix de l'or en {{countryCurrency}}, prix de l'or par once en, taux de l'once d'or aujourd'hui en {{countryName}},
   22k 21k 24k 20k 18k 14k prix de l'or en {{countryCurrency}} en {{countryName}},
   prix de l'or aujourd'hui en {{countryName}}, cours de l'or, prix de l'or 24 carats par gramme, prix or 18 carats / gramme, prix de l'or 21 carats par gramme, prix or 21 carats / gramme prix or / gramme 24 carats`,
metaOGDescription: `Prix de l'or en {{countryName}}. Le prix actuel de l'Ounce Gram Kilo est disponible en {{countryCurrency}} en 24k, 22k, 23k, 21k, 20k, 18k.
   Nous fournissons les derniers taux du taux de change actuel de {{countryCurrency}}.
   Prix de l'or aujourd'hui par once = {{ouncePrice}} {{code}}, prix de l'or aujourd'hui par gramme = {{gramPrice}} {{code}}, prix de l'or aujourd'hui par kilo = {{kiloPrice}} {{code}} , mis à jour à {{updatedTime}}.`,
},  
zho: {
    metaTitle: (countryName: string, code: string) =>  `${countryName}中的黄金价格-${code}中的盎司克黄金汇率`,
    metaDescription:
      "{{countryName}}中的黄金汇率。 盎司{克朗货币}}的当前价格为24k，22k，21k，18k",
    metaKeywords: `{{countryName}}中的盎司金价，{{countryName}}中的克金价，{{countryName}}中的千金价，
       {{countryCurrency}}中的黄金价格，每盎司中的黄金价格，{{countryName}}中的今天盎司黄金价格，
       在{{countryName}}中{{countryCurrency}}中的22k 21k 24k 20k 18k 14k黄金价格，
       {{countryName}}中的今天黄金价格，黄金库存价格，每克24k黄金价格，18k黄金/克价格，21k黄金每克价格，21k黄金/克价格24k黄金/克价格`,
    metaOGDescription: `{{countryName}}中的黄金价格。 盎司（{{countryCurrency}}}的当前价格为24k，22k，23k，21k，20k，18k。
       我们正在提供{{countryCurrency}}当前汇率中的最新汇率。
       今天每盎司黄金价格= {{ouncePrice}} {{code}}，今天每克黄金价格= {{gramPrice}} {{code}}，今天每公斤黄金价格= {{kiloPrice}} {{code}} ，于{{updatedTime}}更新。`,
  },
}