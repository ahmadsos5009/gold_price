import React from "react";
import {  ListGroup } from "react-bootstrap";
import { CurrencyCode } from "../constants";
import CountryData from "country-data";
import { Link } from '@reach/router'
import styled from "styled-components";

const HiddenLink = styled.div`
  display: none;
`;

const Currencies: React.FC = () => {
  return(
    <ListGroup>
      {CurrencyCode.map((currency: string) => (
        <ListGroup.Item key={currency}>
          <Link to={`/${currency}`} >
            {CountryData.currencies[currency].name}
          </Link>
          <HiddenLink>
            <Link to={`/${currency}/ara`} >
              {CountryData.currencies[currency].name}
            </Link>
            <Link to={`/${currency}/zho`} >
              {CountryData.currencies[currency].name}
            </Link>
            <Link to={`/${currency}/fra`} >
              {CountryData.currencies[currency].name}
            </Link>
            <Link to={`/${currency}/deu`} >
              {CountryData.currencies[currency].name}
            </Link>
          </HiddenLink>
        </ListGroup.Item>
      ))}
    </ListGroup>
);
}

export default Currencies;
