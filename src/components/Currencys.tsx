import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import Header from "./Header";
import { CurrencyCode } from "../constants";
import CountryData from "country-data";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HiddenLink = styled.div`
  display: none;
`
const Currencys: React.FC = () => (
    <Container fluid={"md"}>
        <Header />
        <br />
        <br />
        <ListGroup>
            {CurrencyCode.map((currency: string) => (
                <ListGroup.Item key={currency}>
                    <NavLink to={`/${currency}`} exact>
                        {CountryData.currencies[currency].name}
                    </NavLink>
                    <HiddenLink>
                        <NavLink to={`/${currency}/ara`} exact>
                            {CountryData.currencies[currency].name}
                        </NavLink>
                        <NavLink to={`/${currency}/zho`} exact>
                            {CountryData.currencies[currency].name}
                        </NavLink>
                        <NavLink to={`/${currency}/fra`} exact>
                            {CountryData.currencies[currency].name}
                        </NavLink>
                        <NavLink to={`/${currency}/deu`} exact>
                            {CountryData.currencies[currency].name}
                        </NavLink>
                    </HiddenLink>
                </ListGroup.Item>
            ))}
        </ListGroup>
    </Container>
);

export default Currencys;
