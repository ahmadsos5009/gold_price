import React from "react";
import { Container } from "react-bootstrap";
import Header from "./Header";

export const Layout: React.FC = ({ children }) => (
  <Container>
    <Header previousPrice={44.25} currentPrice={44.6} />
    {children}
  </Container>
);
