import Card from "components/card";
import React from "react";

import style from "./client-overview.module.scss";

const ClientCompanyInformation = ({ clientData }) => {
  return (
    <>
      <Card className={style.cardInfo}>
        <div className={style.companyInfo}>
          <p className={style.companyTitle}>Company information</p>
          <div className={style.grid}>
            <div>
              <p className={style.title}>
                {clientData?.shortName || "DM Transport Milorad TOMić s.p."}
              </p>
              <p className={style.title}>
                {clientData?.address || "Celovška cesta 291"}
              </p>
              <p className={style.title}>
                {clientData?.post || "1000 Ljubljana"}
              </p>
              <p className={style.title}>{clientData?.country || "Slovenja"}</p>
            </div>
            <div className={style.secondDiv}>
              <div className={style.secondFlex}>
                <p className={style.secondTitle}>Company no.</p>
                <p className={style.title}>
                  {clientData?.companyNumber || "5025796000"}
                </p>
              </div>
              <div className={style.secondFlex}>
                <p className={style.secondTitle}>Vat no.</p>
                <p className={style.title}>SI80267432</p>
              </div>
              <div className={style.secondFlex}>
                <p className={style.secondTitle}>Founding capital</p>
                <p className={style.title}>10.000.000,00 EUR</p>
              </div>
            </div>
            <div className={style.secondDiv}>
              <div className={style.secondFlex}>
                <p className={style.secondTitle}>Owner</p>
                <p className={style.title}>Janez Novak</p>
              </div>
              <div className={style.secondFlex}>
                <p className={style.secondTitle}>Representative</p>
                <p className={style.title}>Janez Novak</p>
              </div>
              <div className={style.secondFlex}>
                <p className={style.secondTitle}></p>
                <p className={style.title}>Matej Novak</p>
              </div>
              <div className={style.secondFlex}>
                <p className={style.secondTitle}></p>
                <p className={style.title}>Žiga Müller</p>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ClientCompanyInformation;
