import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CountryData from "country-data";
import { Container, Row, Col } from 'react-bootstrap';
import PriceTable from './PriceTable';
import PriceWeight from './PriceWeight';
import MyChart from './graph';
import Welcome from './Welcome';

type History = (number | Date)[][]

interface Main extends RouteComponentProps {
  price: number,
  date: Date,
  historyData: History
}

const StyledContiner = styled(Container)`
   background-color: #f5f5fa;
`;

const getGraphData = (historyData: History) => {
  if (historyData[historyData.length - 1][1] > historyData[historyData.length - 2][1])
    return [{ data: [] }, { label: 'Price During Month', data: historyData }];
  else
    return [{ data: [] }, { data: [] }, { data: [] }, { label: 'Price During Month', data: historyData }];
}

const Main: React.FC<Main> = ({ price, date, historyData, location }) => {
  const currency = location.pathname === "/" ? "USD" : location.pathname.replace("/", "");
  const countryCurrency = CountryData.currencies[currency].name;

  return (
    <StyledContiner>
      <br />
      <br />
        <Container>
          <Row>
            <Col>
              <PriceTable price={price} countryCurrency={countryCurrency} updateDate={date} />
            </Col>
            <Col>
              <PriceWeight price={price} />
            </Col>
          </Row>
          <Row>
            <Col>
              <MyChart pricesHistory={getGraphData(historyData)} />
            </Col>
          </Row>
          <Row>
          </Row>
          <Row>
            <Col>
              <Welcome />
            </Col>
          </Row>
        </Container>
    </StyledContiner>
  );
}

export default withRouter(Main);

