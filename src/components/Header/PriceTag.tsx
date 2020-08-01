import React from "react";
import { Row, Container } from "react-bootstrap";
import styled from "styled-components";

interface PriceTag {
  currentPrice: number;
  previousPrice: number;
}

const StyledArrow: any = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-${(props: any) => (props.up ? "bottom" : "top")}: 
       10px solid ${(props: any) => (props.up ? "green" : "red")} ;
  margin-top: 5px;
`;

const StyledPriceTag: any = styled.div`
  margin: 5px;
  color: ${(props: any) => (props.up ? "green" : "red")};
`;

const PriceTag: React.FC<PriceTag> = ({ currentPrice, previousPrice }) => {
  if (currentPrice < previousPrice) {
    return (
      <StyledPriceTag>
        <Container>
          <Row>
            <StyledArrow /> {currentPrice} -
            {Math.abs(currentPrice - previousPrice).toFixed(2)}
          </Row>
        </Container>
      </StyledPriceTag>
    );
  } else {
    return (
      <StyledPriceTag up>
        <Container>
          <Row>
            <StyledArrow up /> {currentPrice} +
            {Math.abs(currentPrice - previousPrice).toFixed(2)}
          </Row>
        </Container>
      </StyledPriceTag>
    );
  }
};

export default PriceTag;
