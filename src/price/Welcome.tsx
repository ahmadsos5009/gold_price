import React from "react";
import { Alert } from "react-bootstrap";

const Welcome = () => (
    <Alert variant="success">
        <Alert.Heading>Hey, nice to see you</Alert.Heading>
        <p>
            Throughout history, gold has been seen as a special and valuable commodity.
            <br/>
            Today, owning gold can act as a hedge against inflation and deflation alike, as well as a good portfolio diversifier.
            <br/>
            As a global store of value, gold can also provide financial cover during geopolitical and macroeconomic
            uncertainty.
        </p>
        <hr />
        <p>
            <strong>We should know that gold price is linked to oil and dollar as following:</strong>
            <br/>
            The higher the price of oil, so that the price of gold; The relationship between them is a direct correlation.
            <br/>
            The higher the price of the dollar, the lower the price of gold. The relationship between them is inverse.
        </p>
    </Alert>
);

export default Welcome;