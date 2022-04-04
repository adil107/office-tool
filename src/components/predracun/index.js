import React from "react";

import Card from "components/card";
import Checkbox from "components/checkbox";
import FigureElements from "components/figure-elements";
import ChipBar from "components/chip-bar";

import style from "./predracun-advance.module.scss";
import rightArrow from "assets/icons/right-arrow-blue.svg";

const Predracun = ({
  className,
  tableBody,
  handleColumnChange,
  handleRowChange,
  checkboxRowName,
  columnCheckbox,
}) => {
  return (
    <Card className={`${style.wrapper} ${className}`}>
      <div className={style.cardHeader}>
        <div className={style.headerContent} style={{ flexBasis: "33px" }}>
          <Checkbox
            handleChange={handleColumnChange}
            name="columnCheckbox"
            checked={columnCheckbox}
          />
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "89px", textAlign: "left" }}
        >
          <p>Invoice no.</p>
        </div>
        <div
          className={style.headerContent}
          style={{ flexBasis: "306px", textAlign: "left" }}
        >
          <p>Debtor</p>
          <small>Basis</small>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "103px", textAlign: "center" }}
        >
          <p>Date of issue</p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "217px", textAlign: "center" }}
        >
          <p>Due / Late</p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "283px", textAlign: "center" }}
        >
          <p>
            Amount with <br /> VAT
          </p>
        </div>

        <div className={style.headerContent} style={{ flexBasis: "271px" }}>
          <div className={style.statusIconDiv}>
            <p style={{ flexBasis: "208px" }}>Status</p>
          </div>
        </div>
      </div>

      {/* Body */}
      {tableBody?.map((ele, index) => (
        <div className={style.cardBody} key={index}>
          <div className={style.bodyContent} style={{ flexBasis: "33px" }}>
            <Checkbox
              handleChange={handleRowChange}
              name={ele?.id}
              checked={checkboxRowName[ele?.id]}
            />
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "89px", textAlign: "left" }}
          >
            <p className={style.p} style={{ fontSize: "16px" }}>
              {ele?.invoiceNo}
            </p>
            <small style={{ fontStyle: "italic" }}>Avansni</small>
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "306px", textAlign: "left" }}
          >
            <p
              className={style.p}
              style={{ fontWeight: 700, fontSize: "16px" }}
            >
              {ele?.debtor}
            </p>
            <span>{ele?.debtorBasic}</span>
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "103px", textAlign: "center" }}
          >
            <p className={style.p}>{ele?.dateIssue}</p>
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "217px", textAlign: "center" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className={style.p}>{ele?.dueLateDate}</p>
              <FigureElements
                className={style.figureElement}
                backgroundColor={ele?.late}
              />
            </div>
          </div>

          <div className={style.bodyContent} style={{ flexBasis: "283px" }}>
            <p
              className={style.p}
              style={{ fontWeight: 700, fontSize: "18px", textAlign: "center" }}
            >
              {ele?.amountWithVAT}
            </p>
          </div>

          <div className={style.bodyContent} style={{ flexBasis: "271px" }}>
            <div className={style.statusIconDiv}>
              <div
                style={{
                  flexBasis: "208px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <ChipBar status={ele?.status} />
              </div>
              <div className={style.statusImgDiv}>
                <img src={rightArrow} alt="" style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Card>
  );
};

export default Predracun;
