import React from "react";
import { Table, Badge } from "react-bootstrap";
import { useTranslation } from "react-i18next";

type PriceTable = {
    price: number,
    countryCurrency: string
}

function calculate_price_per_unit(price: number, unit: number) {
    return (unit * price).toFixed(2);
}

const PriceTable: React.FC<PriceTable> = ({price, countryCurrency}) => {
  const [t] = useTranslation('translations');

   return (
     <React.Fragment>
       <Table striped bordered hover responsive>
         <thead>
           <tr>
             <th colSpan={2}>
             {t('purity')} {countryCurrency}
             </th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th>{t('tableUnti')}</th>
             <th>{t('tablePrice')}</th>
           </tr>
           <tr>
             <td>24K</td>
             <td>{price.toFixed(2)}</td>
           </tr>
           <tr>
             <td>22K</td>
             <td>{calculate_price_per_unit(price, 0.9167)}</td>
           </tr>
           <tr>
             <td>21K</td>
             <td>{calculate_price_per_unit(price, 0.875)}</td>
           </tr>
           <tr>
             <td>18K</td>
             <td>{calculate_price_per_unit(price, 0.75)}</td>
           </tr>
         </tbody>
         <caption>
           <Badge variant="dark">
           {t('badgePriceTable')}
           </Badge>
         </caption>
       </Table>
     </React.Fragment>
   );
}

export default PriceTable;