import React from "react";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type PriceTable = {
    price: number,
}

function calculate_price_per_weight(price: number, weight: number) {
    return (weight * price).toFixed(2);
}

const PriceWeight: React.FC<PriceTable> = ({price}) => {
  const [t] = useTranslation('translations');

   return (
    <React.Fragment>
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th colSpan={2}>{t('weightTableHeader')}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>{t('weightTableWeight')}</th>
          <th>{t('tablePrice')}</th>
        </tr>
        <tr>
          <td>{t('gram')}</td>
          <td>{price.toFixed(2)}</td>
        </tr>
        <tr>
          <td>{t('ounce')}</td>
          <td>{calculate_price_per_weight(price, 31.103)}</td>
        </tr>
        <tr>
          <td>{t('kilo')}</td>
          <td>{calculate_price_per_weight(price, 1000)}</td>
        </tr>
      </tbody>
    </Table>
  </React.Fragment>
   );
}

export default PriceWeight;