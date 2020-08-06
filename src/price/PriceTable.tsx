import React from "react";
import { Table, Badge } from "react-bootstrap";

type PriceTable = {
    price: number,
    countryCurrency: string
}

function calculate_price_per_unit(price: number, unit: number) {
    return (unit * price).toFixed(2);
}

const PriceTable: React.FC<PriceTable> = ({price, countryCurrency}) => {
   return (
     <React.Fragment>
       <Table striped bordered hover responsive>
         <thead>
           <tr>
             <th colSpan={2}>
               Price table based on purity, In {countryCurrency}
             </th>
           </tr>
         </thead>
         <tbody>
           <tr>
             <th>Unite</th>
             <th>Price</th>
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
           <Badge variant="info">
             Price get updated every 12 hours
           </Badge>
         </caption>
       </Table>
     </React.Fragment>
   );
}

export default PriceTable;