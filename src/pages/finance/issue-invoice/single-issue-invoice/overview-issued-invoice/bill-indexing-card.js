import React from "react";

import Card from "components/card";
import BillIndexing from "components/bill-indexing";

import style from "./overview-issue.module.scss";
import refresh from "assets/icons/Combined Shape.svg";
import legalBlueImg from "assets/icons/legal-help-blue.svg";
import predracun from "assets/legal_financial/predracun.svg";

const OverviewIssueInvoiceIndexing = () => {
  return (
    <>
      <div className={style.billIndexing}>
        <BillIndexing indexingRows={indexingRows} />

        <div className={style.grid}>
          <div style={{ marginLeft: "10px" }}>
            <div className={style.divFlex}>
              <img src={refresh} alt="" className={style.imgIcon} />
              <p className={style.izrandu}>
                Obrnjena davčna stopnja je vključena v račun za postavke 1, 2,
                in 3. Izračun je na končnem računu.
              </p>
            </div>
            <div className={style.divFlex}>
              <img src={legalBlueImg} alt="" className={style.imgIcon} />

              <p className={style.izrandu}>
                Pravno obvestilo:{" "}
                <span style={{ fontStyle: "italic", marginRight: "2px" }}>
                  “V primeru zamude...”
                </span>
                je vključeno v končni račun.
              </p>
            </div>
            <div className={style.divFlex}>
              <img src={predracun} alt="" className={style.imgIcon} />
              <div style={{ display: "flex", alignItems: "flex-start" }}>
                <p className={style.izrandu}>Davčno obvestilo:</p>
                <div style={{ marginLeft: "12px" }}>
                  <p
                    className={style.izrandu}
                    style={{ marginLeft: "0px", fontStyle: "italic" }}
                  >
                    9,5% davek
                  </p>
                  <p
                    className={style.izrandu}
                    style={{ marginLeft: "0px", fontStyle: "italic" }}
                  >
                    22% davek so vključeni v končni račun.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Card className={style.innerCard}>
            <div className={style.leftDiv}>
              <p className={style.cena}>Cena brez DDV</p>
              <p className={style.cena}>Skupaj DDV</p>
              <p className={style.cena}>Skupaj z DDV</p>
              <p className={style.cena}>Izbrani avansni računi</p>
              <p className={style.innerEnd}>ZA PLAČILO</p>
            </div>
            <div className={style.rightDiv}>
              <div className={style.flexInner}>
                <p className={style.rightCena}>400,00</p>
                <p className={style.rightCena}>EUR</p>
              </div>
              <div className={style.flexInner}>
                <p className={style.rightCena}>88,00</p>
                <p className={style.rightCena}>EUR</p>
              </div>
              <div className={style.flexInner}>
                <p className={style.rightCena}>488,00</p>
                <p className={style.rightCena}>EUR</p>
              </div>
              <div className={style.flexInner}>
                <div>
                  <p
                    className={style.rightCena}
                    style={{ marginBottom: "0px" }}
                  >
                    100,00{" "}
                    <span style={{ fontSize: "12px", color: "#7E858D" }}>
                      {" "}
                      102 / 2021
                    </span>
                  </p>
                  <p className={style.rightCena}>
                    288,00{" "}
                    <span style={{ fontSize: "12px", color: "#7E858D" }}>
                      {" "}
                      102 / 2021
                    </span>
                  </p>
                </div>
                <div>
                  <p
                    className={style.rightCena}
                    style={{ marginBottom: "0px" }}
                  >
                    EUR
                  </p>
                  <p className={style.rightCena}>EUR</p>
                </div>
              </div>
              <div className={style.flexInner}>
                <p className={style.innerEnd}>100,00</p>
                <p className={style.innerEnd}>EUR</p>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <p className={style.lastFooter}>
            Osnovni podatki podjetja, ki morajo biti na računu - to je za
            pdf/logiko
          </p>
        </div>
      </div>
    </>
  );
};

export default OverviewIssueInvoiceIndexing;

const indexingRows = [
  {
    id: "1",
    unit: "Service X",
    amount: "1",
    price: "100,00",
    vat: "22%",
    vatur: "22,00",
    vatAmount: "122,00",
  },
  {
    id: "2",
    unit: "Storitev Y",
    amount: "1",
    price: "100,00",
    vat: "22%",
    vatur: "22,00",
    vatAmount: "122,00",
  },
  {
    id: "2",
    unit: "Storitev Z",
    amount: "1",
    price: "100,00",
    vat: "22%",
    vatur: "22,00",
    vatAmount: "122,00",
  },
  {
    id: "2",
    unit: "Storitev A",
    amount: "1",
    price: "100,00",
    vat: "22%",
    vatur: "22,00",
    vatAmount: "122,00",
  },
];
