import React, { useEffect } from 'react'
import { Helmet } from "react-helmet";
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import { CountryCode, History } from '../constants';
import PriceTable from './PriceTable';
import PriceWeight from './PriceWeight';
import Welcome from './Welcome';
import PriceTag from '../components/Header/PriceTag';
import ChartsPage from './graph/Chart';
import CountryData from "country-data";
import { useTranslation } from "react-i18next";
import CountryDictionary from '../constants/languages/country';
import CurrencyDictionary from '../constants/languages/currency';
import { NavLink } from 'react-router-dom';

interface Main {
    price: number,
    timestamp: number,
    currency: string
}

const StyledContainer = styled(Container)`
   background-color: #f5f5fa;
`;

const StyledDate = styled.span`
  font-size: 12px;
  color: #bbb;
  alien
`;

const Header = styled.h1`
  font-family: Lato,"Helvetica Neue",Helvetica,Arial,sans-serif;
  line-height: 1.3!important;
  font-size: 1.9rem;
  font-weight: 700;
`

const Main: React.FC<Main> = ({ price, timestamp, currency }) => {
    const previousPrice = History.data[currency][History.data[currency].length - 2];
    let countryCurrency = CountryData.currencies[currency].name;
    const code = CountryData.currencies[currency].code;
    const countryCode = CountryCode[code];
    let countryName = CountryData.countries[countryCode].name;
    const countryEmoji = CountryData.countries[countryCode].emoji;
    const currencySymbol = CountryData.currencies[currency].symbol;
    const updatedTime = new Date((timestamp * 1000)).toUTCString();
    const language: string = CountryData.countries[countryCode].languages[0] || 'eng'
    const [t, i18n] = useTranslation('translations');

    //@ts-ignore
    if (language !== 'eng' && CountryDictionary[language]) {
        //@ts-ignore
        countryName = CountryDictionary[language][countryCode];
        //@ts-ignore
        countryCurrency = CurrencyDictionary[language][code];
    }
    
    useEffect(() => {
        i18n.changeLanguage(language);
    }, []);

    return (
        <StyledContainer fluid>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gold Price In {countryName}</title>
            </Helmet>
            <br />
            <br />
            <Header>{t('header', { countryName })} {countryEmoji}</Header>
            <Row>
                <Col xs={16} md={4}>
                    <PriceTag
                        previousPrice={previousPrice}
                        currentPrice={price}
                        symbol={currencySymbol}
                    />
                </Col>
                <Col>
                    <StyledDate className="mr-auto">
                        {t('update', { updatedTime })}
                    </StyledDate>
                </Col>
            </Row>
            <br />
            <br />
            <Row className={"show-grid"}>
                <Col xs={16} md={4}>
                    <PriceTable
                        price={price}
                        countryCurrency={countryCurrency}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <PriceWeight price={price} />
                </Col>
            </Row>
            <Row className={"show-grid"}>
                <Col xs={12} md={4}>
                    <ChartsPage dates={History.date}
                        data={History.data[currency]}
                        price={price}
                        previousPrice={previousPrice}
                        t={t} />
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
            <NavLink to="/currencys" exact>
                Currencys Page
            </NavLink>
            <br />
            <br />
        </StyledContainer>
    );
}

export default Main;

