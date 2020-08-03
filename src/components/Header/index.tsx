import React from "react";
import styled from "styled-components";
import { Nav, Navbar } from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router";
import CountryData from "country-data";
import PriceTag from "./PriceTag";
import { CurrencyCode, CountryCode } from "../../constants";
import CountrySelect from "./CountrySelect";

export interface Header extends PriceTag, RouteComponentProps { }

const StyledNav = styled(Nav)`
  align-items: center;
`;

const StyledAlert = styled.h4`
  font-size: 2rem;
  margin-bottom: 0;
`;

const StyledNavbar = styled(Navbar)`
  align-items: center;
  justify-content: center;
  display: flex;
  background-image: linear-gradient(#fff,#f5f5fa);
  box-shadow: 0 5px 15px 0 rgba(37,44,97,.15), 0 2px 4px 0 rgba(93,100,148,.2);
`;

const Header: React.FC<Header> = ({
  previousPrice,
  currentPrice,
  location
}) => {
  const currency = location.pathname === "/" ? "USD" : location.pathname.replace("/", "");
  const code = CountryData.currencies[currency].code;
  const countryCode = CountryCode[code];
  const countryName = CountryData.countries[countryCode].name;
  const countryEmoji = CountryData.countries[countryCode].emoji;
  const countries = CurrencyCode.map((currency: string) => ({
    value: currency,
    label: CountryData.currencies[currency].name
  }))

  return (
    <StyledNavbar bg="light" variant="light" sticky="top">
      <Navbar.Brand href="/">
        <img
          src="log.svg"
          width="50"
          height="50"
          className="d-inline-block align-top"
          alt="Gold Price"
        />
      </Navbar.Brand>
      <StyledNav className="mr-auto">
        Gold Price In {countryName}
        <StyledAlert>{countryEmoji}</StyledAlert>
      </StyledNav>
      <Nav>
        <PriceTag previousPrice={previousPrice} currentPrice={currentPrice} />
      </Nav>
      <CountrySelect countries={countries} />
    </StyledNavbar>
  );
};

export default withRouter(Header);
