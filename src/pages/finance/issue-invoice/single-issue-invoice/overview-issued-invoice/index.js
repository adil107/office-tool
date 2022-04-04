import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import Card from "components/card";
import Button from "components/button";

import style from "./overview-issue.module.scss";
import edit from "assets/legal_financial/edit.svg";
import OverviewIssueInvoiceIndexing from "./bill-indexing-card";

const OverviewIssueInvoice = () => {
  const params = useParams();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/finance/issue-invoice/${params?.id}/new-invoice`);
  };
  return (
    <>
      <Card className={style.card}>
        <div className={style.borderPadding}>
          <div className={style.borderBottom}>
            <div className={style.flexBtn}>
              <p className={style.companyTitle}>Overview of issued invoice</p>
              <Button
                title="change invoice"
                icon={edit}
                handleClick={handleNavigate}
              />
            </div>
            <p className={style.tip} style={{ marginTop: "15px" }}>
              Tip računa
            </p>
            <div
              className={style.flexBtn}
              style={{ marginTop: "6px", marginRight: "15px" }}
            >
              <p className={style.asvani}>Avansni</p>
              <p className={style.tip}>Podatki računa</p>
            </div>
            <div className={style.flexEnd}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p className={style.doctum}>Številka računa</p>
                <p className={style.asvani}>103/2021</p>
              </div>
            </div>
            <div
              className={style.flexBtn}
              style={{ marginTop: "15px", marginRight: "15px" }}
            >
              <p className={style.tip}>Dolžnik</p>
              <div style={{ display: "flex", alignItems: "center" }}>
                <p className={style.doctum}>Datum izdaje</p>
                <p className={style.asvani}>10.1.2022</p>
              </div>
            </div>
            <div
              className={style.flexBtn}
              style={{ marginTop: "2px", marginRight: "15px" }}
            >
              <div>
                <p className={style.spos}>Stranka 2</p>
                <p className={style.asvani}>Dunajska cesta 50 </p>
                <p className={style.asvani}>1000 Ljubljana </p>
                <p className={style.asvani}> Slovenija</p>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "flex-start" }}>
                  <p className={style.doctum} style={{ marginRight: "12px" }}>
                    Datum opravljene storitve
                  </p>
                  <div>
                    <p className={style.asvani}>
                      <span style={{ fontSize: "13px" }}>od</span> 10.1.2022
                    </p>
                    <p className={style.asvani} style={{ marginTop: "5px" }}>
                      <span style={{ fontSize: "13px" }}>od</span> 15.1.2022
                    </p>
                  </div>
                </div>
                <div className={style.flexBtn} style={{ marginTop: "15px" }}>
                  <p
                    className={style.doctum}
                    style={{ textAlign: "right", width: "100%" }}
                  >
                    Valuta
                  </p>

                  <p className={style.asvani}>18.1.2022</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <p className={style.spos}>Spoštovani,</p>
            <p className={style.paragraph}>
              Body.... (stranka lahko ta text spreminja na vsakem računu...) -
              izgled in vsebina je vezana na template
            </p>
          </div>
        </div>
        <OverviewIssueInvoiceIndexing />
      </Card>
    </>
  );
};

export default OverviewIssueInvoice;
