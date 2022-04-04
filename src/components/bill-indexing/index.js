import React from "react";

import Card from "components/card";

import style from "./bill-indexing.module.scss";

const BillIndexing = ({ indexingRows }) => {
  return (
    <Card className={style.wrapper}>
      <div className={style.cardHeader}>
        <div
          className={style.headerContent}
          style={{ flexBasis: "60px" }}
        ></div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "402px", textAlign: "left" }}
        >
          <p className={style.p}>Charge unit</p>
        </div>
        <div
          className={style.headerContent}
          style={{ flexBasis: "97px", textAlign: "center" }}
        >
          <p className={style.p}>Amount</p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "198px", textAlign: "center" }}
        >
          <p className={style.p}>Price w/o VAT</p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "102px", paddingLeft: "20px", textAlign: "left" }}
        >
          <p className={style.p}>
            VAT
            <br />%
          </p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "154px", textAlign: "center" }}
        >
          <p className={style.p}>
            VAT
            <br />
            in eur
          </p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "249px", paddingLeft: "20px", textAlign: "left" }}
        >
          <p className={style.p}>Amount with VAT</p>
        </div>
      </div>

      {/* Body */}
      {indexingRows.map((ele, index) => (
        <div className={style.cardBody} key={index}>
          <div className={style.bodyContent} style={{ flexBasis: "60px" }}>
            <p>{ele.id}</p>
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "402px", textAlign: "left" }}
          >
            <p className={style.p}>{ele.unit}</p>
          </div>
          <div
            className={style.bodyContent}
            style={{ flexBasis: "97px", textAlign: "center" }}
          >
            <p className={style.p}>{ele.amount}</p>
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "198px", textAlign: "center" }}
          >
            <p className={style.p}>{ele.price}</p>
          </div>

          <div
            className={style.bodyContent}
            style={{
              flexBasis: "102px",
              paddingLeft: "20px",
              textAlign: "left",
            }}
          >
            <p className={style.p}>{ele.vat}</p>
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "154px", textAlign: "center" }}
          >
            <p className={style.p}>{ele.vatur}</p>
          </div>

          <div
            className={style.bodyContent}
            style={{
              flexBasis: "249px",
              paddingLeft: "20px",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <p className={style.p}>{ele.vatAmount}</p>
            <p className={style.p} style={{ textAlign: "right" }}>
              EUR
            </p>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default BillIndexing;
