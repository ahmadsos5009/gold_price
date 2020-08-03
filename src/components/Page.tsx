import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";
import Main from "../price";

const highData = [{data: []},{data: []},{data: []},
  {
    label: 'Price During Month',
    data: [[new Date('2020,07,06'), 45.02], [new Date('2020,07,05'), 43.61], [new Date('2020,07,04'), 42.90], [new Date('2020,07,03'), 41.65], [new Date('2020,07,02'), 41.18]]
  }
];

const lowData = [{data: []},{
  label: 'Price During Month',
  data: [[new Date('2020,07,06'), 41.02], [new Date('2020,07,05'), 41.61], [new Date('2020,07,04'), 42.90], [new Date('2020,07,03'), 43.65], [new Date('2020,07,02'), 44.18]]
}
];

const data =  [[new Date('2020,07,06'), 45.02], [new Date('2020,07,05'), 43.61], [new Date('2020,07,04'), 42.90], [new Date('2020,07,03'), 41.65], [new Date('2020,07,02'), 41.18]]

export const Page: React.FC = () => (
  <Container>
    <Header previousPrice={44.25} currentPrice={44.6} />
    <Main price={44.06} date={new Date()} historyData={data}/>
  </Container>
);
