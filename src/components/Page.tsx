import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Main from "../price";

const data = [
  [new Date("2020,07,06"), 45.02],
  [new Date("2020,07,05"), 43.61],
  [new Date("2020,07,04"), 42.9],
  [new Date("2020,07,03"), 41.65],
  [new Date("2020,07,02"), 41.18],
];

export const Page: React.FC = () => (
  <Container fluid={"md"}>
    <Header />
    <Main price={44.06} date={new Date()} historyData={data} />
  </Container>
);
