import React from "react";
import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";
import CountryData from "country-data";
import { CurrencyCode } from "../../constants";
import CountrySelect from "./CountrySelect";

const StyledNav = styled(Nav)`
  align-items: center;
`;

const StyledNavbar = styled(Navbar)`
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: linear-gradient(#fff,#f5f5fa);
  box-shadow: 0 5px 15px 0 rgba(37,44,97,.15), 0 2px 4px 0 rgba(93,100,148,.2);
`;

const Header: React.FC = () => {
  const countries = CurrencyCode.map((currency: string) => ({
    value: currency,
    label: CountryData.currencies[currency].name,
  }));

  return (
    <StyledNavbar bg="light" expand="lg">
      <Navbar.Brand href="/" className="mr-auto">
        <img
          src="log.svg"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Gold Price"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <StyledNav className="mr-auto"></StyledNav>
        <CountrySelect countries={countries} />
      </Navbar.Collapse>
    </StyledNavbar>
  );
};

export default Header;
