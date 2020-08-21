import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Main from "../price";
import { Store } from "../constants";
import { RouteComponentProps, withRouter } from "react-router-dom";
//@ts-ignore
import MetaTags from 'react-meta-tags';
import { useTranslation } from "react-i18next";

const Page: React.FC<RouteComponentProps> = ({ location }) => {
    const currency = location.pathname === "/" ? "USD" : location.pathname.replace("/", "");
    const [t] = useTranslation('translations');

    return (
        <Container fluid={"md"}>
        <MetaTags>
        <title>{t("metaTitle", { currency })}</title>
        </MetaTags>
            <Header />
            <Main price={Store.prices[currency]}
                timestamp={Store.timestamp}
                currency={currency}
                languageParam={location.search.replace("?", "")} />
        </Container>
    );
}

export default withRouter(Page);
