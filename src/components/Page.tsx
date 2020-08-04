import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Main from "../price";

export const Page: React.FC = () => (
  <Container>
    <Header previousPrice={44.25} currentPrice={44.6} />
    <Main price={44.06} date={new Date()}/>
  </Container>
);
