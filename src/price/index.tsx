import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import CountryData from "country-data";
import { Container, Row, Col } from 'react-bootstrap';
import PriceTable from './PriceTable';
import PriceWeight from './PriceWeight';
import Welcome from './Welcome';

interface Main extends RouteComponentProps {
  price: number,
  date: Date,
}

const StyledContiner = styled(Container)`
   background-color: #f5f5fa;
`;

const Main: React.FC<Main> = ({ price, date, location }) => {
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

