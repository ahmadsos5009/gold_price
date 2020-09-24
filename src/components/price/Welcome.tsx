import React from "react";
import { Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";

const Welcome = () => {
    const [t] = useTranslation('translations');

    return (
      <Alert variant="dark">
        <Alert.Heading>{t("Welcome1")}</Alert.Heading>
        <p>
          {t("Welcome2")}
          <br />
          {t("Welcome3")}
          <br />
          {t("Welcome4")}
        </p>
        <hr />
        <p>
          <strong>{t("Welcome5")}</strong>
          <br />
          {t("Welcome6")}
          <br />
          {t("Welcome7")}
        </p>
      </Alert>
    );
}

export default Welcome;