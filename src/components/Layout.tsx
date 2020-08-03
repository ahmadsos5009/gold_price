import React from "react";
import { Container } from "react-bootstrap";

export const Layout: React.FC = ({ children }) => (
  <Container fluid>
    {children}
  </Container>
);
