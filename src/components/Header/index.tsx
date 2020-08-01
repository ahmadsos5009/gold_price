import React from "react";
import styled from "styled-components";
import { Nav, Navbar, Dropdown } from "react-bootstrap";
import { withRouter, RouteComponentProps } from "react-router";
import CountryData from "country-data";
import PriceTag from "./PriceTag";
import { CurrencyCode, CountryCode } from "../../constants";

export interface Header extends PriceTag, RouteComponentProps {}

const StyledDropDown = styled(Dropdown.Menu)`
  max-height: 30vh;
  overflow-y: auto;
`;

const StyledNav = styled(Nav)`
  align-items: center;
`;

const StyledAlert = styled.h4`
  font-size: 2rem;
  margin-bottom: 0;
`;

const StyledNavbar = styled(Navbar)`
  background-color: #dee2e6!important;
`;

const Header: React.FC<Header> = ({
  previousPrice,
  currentPrice,
  location
}) => {
  console.log(location);
  const currency = location.pathname === "/" ? "USD" : location.pathname.replace("/","");
  const code = CountryData.currencies[currency].code;
  const countryCode = CountryCode[code];
  const countryName = CountryData.countries[countryCode].name;
  const countryEmoji = CountryData.countries[countryCode].emoji;
  
  return (
    <StyledNavbar bg="light" variant="light">
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
      <Dropdown>
        <Dropdown.Toggle variant="info" id="dropdown-basic">
          Countries
        </Dropdown.Toggle>
        <StyledDropDown>
          {CurrencyCode.map((currency: string) => (
            <Dropdown.Item href={`/${currency}`} key={currency}>
              {CountryData.currencies[currency].name}
            </Dropdown.Item>
          ))}
        </StyledDropDown>
      </Dropdown>
    </StyledNavbar>
  );
};

export default withRouter(Header);
