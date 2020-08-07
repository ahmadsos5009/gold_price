import React from 'react'
import {Helmet} from "react-helmet";
import styled from 'styled-components';
import {Container, Row, Col} from 'react-bootstrap';
import {CountryCode, History} from '../constants';
import PriceTable from './PriceTable';
import PriceWeight from './PriceWeight';
import Welcome from './Welcome';
import PriceTag from '../components/Header/PriceTag';
import ChartsPage from './graph/Chart';
import CountryData from "country-data";

interface Main {
    price: number,
    timestamp: number,
    currency: string
}

const StyledContainer = styled(Container)`
   background-color: #f5f5fa;
`;

const StyledText = styled.strong`
  display: inline-block;
  width: 100%;
  color: #262626;
  font-size: 16px;
`;

const StyledDate = styled.span`
  font-size: 12px;
  color: #bbb;
  alien
`;

const Main: React.FC<Main> = ({price, timestamp, currency}) => {
    const previousPrice = History.data[currency][History.data[currency].length - 2];
    const countryCurrency = CountryData.currencies[currency].name;
    const code = CountryData.currencies[currency].code;
    const countryCode = CountryCode[code];
    const countryName = CountryData.countries[countryCode].name;
    const countryEmoji = CountryData.countries[countryCode].emoji;
    const currencySymbol = CountryData.currencies[currency].symbol;

    return (
        <StyledContainer fluid>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Gold Price In {countryName}</title>
            </Helmet>
            <br/>
            <br/>
            <StyledText>
                Gold Price In {countryName} {countryEmoji}
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
                            Updated: {new Date((timestamp * 1000)).toUTCString()}
                        </StyledDate>
                    </Col>
                </Row>
            </StyledText>
            <br/>
            <br/>
            <Row className={"show-grid"}>
                <Col xs={16} md={4}>
                    <PriceTable
                        price={price}
                        countryCurrency={countryCurrency}
                    />
                </Col>
                <Col xs={12} md={4}>
                    <PriceWeight price={price}/>
                </Col>
            </Row>
            <Row className={"show-grid"}>
                <Col xs={12} md={4}>
                    <ChartsPage dates={History.date}
                                data={History.data[currency]}
                                price={price}
                                previousPrice={previousPrice}/>
                </Col>
            </Row>
            <Row></Row>
            <Row className={"show-grid"}>
                <Col>
                    <Welcome/>
                </Col>
            </Row>
        </StyledContainer>
    );
}

export default Main;

