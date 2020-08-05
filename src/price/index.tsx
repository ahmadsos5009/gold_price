import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CountryData from "country-data";
import { Container, Row, Col } from 'react-bootstrap';
import PriceTable from './PriceTable';
import PriceWeight from './PriceWeight';
import Welcome from './Welcome';
import { CountryCode } from '../constants';
import PriceTag from '../components/Header/PriceTag';
import ChartsPage from './graph/Chart';


type History = (number | Date)[][]

interface Main extends RouteComponentProps {
  price: number,
  date: Date,
  historyData: History
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

const data = [45.02,46.55,47.04,48.07,45.66];
const dates = [
  [new Date("2020,07,06").getDay()],
  [new Date("2020,07,05").getDay()],
  [new Date("2020,07,04").getDay()],
  [new Date("2020,07,03").getDay()],
  [new Date("2020,07,02").getDay()],
];


const Main: React.FC<Main> = ({ price, date, historyData, location }) => {
  const currency = location.pathname === "/" ? "USD" : location.pathname.replace("/", "");
  const countryCurrency = CountryData.currencies[currency].name;
  const code = CountryData.currencies[currency].code;
  const countryCode = CountryCode[code];
  const countryName = CountryData.countries[countryCode].name;
  const countryEmoji = CountryData.countries[countryCode].emoji;
  const currencySymbol = CountryData.currencies[currency].symbol;

  return (
    <StyledContainer fluid>
      <br />
      <br />
      <StyledText>
        Gold Price In {countryName} {countryEmoji}
        <Row>
          <Col xs={16} md={4}>
            <PriceTag
              previousPrice={price}
              currentPrice={price - 1}
              symbol={currencySymbol}
            />
          </Col>
          <Col>
            <StyledDate className="mr-auto">
              Updated: {new Date().toUTCString()}
            </StyledDate>{" "}
          </Col>
        </Row>
      </StyledText>
      <br />
      <br />
      <Row className={"show-grid"}>
        <Col xs={16} md={4}>
          <PriceTable
            price={price}
            countryCurrency={countryCurrency}
            updateDate={date}
          />
        </Col>
        <Col xs={12} md={4}>
          <PriceWeight price={price} />
        </Col>
      </Row>
      <Row className={"show-grid"}>
        <Col xs={12} md={4}>
          <ChartsPage dates={dates} data={data} />
        </Col>
      </Row>
      <Row></Row>
      <Row className={"show-grid"}>
        <Col>
          <Welcome />
        </Col>
      </Row>
    </StyledContainer>
  );
}

export default withRouter(Main);

