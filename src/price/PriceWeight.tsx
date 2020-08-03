import React from "react";
import { Table } from "react-bootstrap";

type PriceTable = {
    price: number,
}

function calculate_price_per_weight(price: number, weight: number) {
    return (weight * price).toFixed(2);
}

const PriceWeight: React.FC<PriceTable> = ({price}) => {
   return (
    <React.Fragment>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th colSpan={2}>Price Per Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Weight</th>
          <th>Price</th>
        </tr>
        <tr>
          <td>Gram</td>
          <td>{price.toFixed(2)}</td>
        </tr>
        <tr>
          <td>Ounce</td>
          <td>{calculate_price_per_weight(price, 31.103)}</td>
        </tr>
        <tr>
          <td>Kilo</td>
          <td>{calculate_price_per_weight(price, 1000)}</td>
        </tr>
      </tbody>
    </Table>
  </React.Fragment>
   );
}

export default PriceWeight;