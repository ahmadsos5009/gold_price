import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Main from "../price";

export const Page: React.FC = () => (
  <Container fluid={"md"}>
    <Header />
    <Main price={44.06} date={new Date()} historyData={data} />
  </Container>
);
