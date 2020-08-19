import React from "react";
import { Container, ListGroup } from "react-bootstrap";
import Header from "./Header";
import { CurrencyCode } from "../constants";
import CountryData from "country-data";
import { NavLink } from "react-router-dom";

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
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    );

export default Currencys;
