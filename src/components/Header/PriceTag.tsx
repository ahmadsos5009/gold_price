import React from "react";

interface PriceTag {
  currentPrice: number;
  previousPrice: number;
  symbol: string
}

type SVG = {
  price: string,
  different: string,
  color: string,
  flip?: string
}

const SVG: React.FC<SVG> = ({ price, different, color, flip = "" }) => (
  <div style={{ alignContent: "center" }}>
    <strong style={{ marginRight: "5px" }}>{price}</strong>
    <svg viewBox="0 0 12 12" width="16" height="16">
      <path
        d="M6,0.002L0 6.002 4.8 6.002 4.8 11.9996 7.2 11.9996 7.2 6.002 12 6.002z"
        transform={flip}
        fill={color}
      />
    </svg>
    <strong style={{ marginLeft: "5px", color: color }}>{different}</strong>
  </div>
);

const PriceTag: React.FC<PriceTag> = ({ previousPrice,currentPrice, symbol }) => {
  if (currentPrice < previousPrice) {
    return (
      <SVG
        price={symbol + currentPrice.toFixed(2)}
        different={`−${Math.abs(currentPrice - previousPrice).toFixed(2)}`}
        color={"#d23f31"}
        flip={"scale(1, -1) translate(0, -12)"}
      />
    );
  } else {
    return (
      <SVG
        price={symbol + currentPrice.toFixed(2)}
        different={`+${Math.abs(currentPrice - previousPrice).toFixed(2)}`}
        color={"#28a745"}
      />
    );
  }
};

export default PriceTag;
