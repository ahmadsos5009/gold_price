import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Main from "../price";
import { Store } from "../constants";
import { RouteComponentProps, withRouter } from "react-router-dom";

const Page: React.FC<RouteComponentProps> = ({ location }) => {
    const currency = location.pathname === "/" ? "USD" : location.pathname.replace("/", "");

    return (
        <Container fluid={"md"}>
            <Header />
            <Main price={Store.prices[currency]}
                timestamp={Store.timestamp}
                currency={currency}
                languageParam={location.search.replace("?", "")} />
        </Container>
    );
}

export default withRouter(Page);
