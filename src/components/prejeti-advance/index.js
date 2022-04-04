import React, { useContext } from "react";

import Card from "components/card";
import Checkbox from "components/checkbox";
import FigureElements from "components/figure-elements";
import ChipBar from "components/chip-bar";

import style from "./prejeti-advance.module.scss";
import moreIcon from "assets/icons/more-icon.svg";
import rightArrow from "assets/icons/right-arrow-blue.svg";
import BasicAdvanceRadio from "components/basic-advance-radio";
import { FinanceContext } from "finance-client-context";

const PrejetiAdvance = ({
  className,
  tableBody,
  open,
  setOpen,
  handleBasicAdvanceFn,
  basicAdvanceVal,
}) => {
  const {
    handleColumnChange,
    handleRowCheckboxChange,
    rowCheckboxName,
    columnCheckbox,
  } = useContext(FinanceContext);

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
          style={{ flexBasis: "177px", textAlign: "center" }}
        >
          <p>Due / Late</p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "182px", textAlign: "center" }}
        >
          <p>
            Amout without <br />
            VAT
          </p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "208px", textAlign: "center" }}
        >
          <p>
            Amount with <br /> VAT
          </p>
        </div>

        <div className={style.headerContent} style={{ flexBasis: "204px" }}>
          <div className={style.statusIconDiv}>
            <p style={{ flexBasis: "140px" }}>Status</p>
            <div className={style.statusImgDiv}>
              <img src={moreIcon} alt="" onClick={() => setOpen(true)} />
            </div>
            {open && (
              <BasicAdvanceRadio
                setOpen={setOpen}
                handleChecked={handleBasicAdvanceFn}
                className={style.basicAdvancePopup}
                checked={basicAdvanceVal}
              />
            )}
          </div>
        </div>
      </div>

      {/* Body */}
      {tableBody?.map((ele, index) => (
        <div className={style.cardBody} key={index}>
          <div className={style.bodyContent} style={{ flexBasis: "33px" }}>
            <Checkbox
              handleChange={handleRowCheckboxChange}
              name={ele?.id}
              checked={rowCheckboxName[ele?.id]}
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
            style={{ flexBasis: "177px", textAlign: "center" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <p className={style.p}>{ele?.dueLateDate}</p>
              <div style={{ marginLeft: "5px" }}>
                <FigureElements value={ele?.late} />
              </div>
            </div>
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "182px", textAlign: "center" }}
          >
            <p className={style.p}>{ele?.amountWithOutVAT}</p>
          </div>

          <div className={style.bodyContent} style={{ flexBasis: "208px" }}>
            <p
              className={style.p}
              style={{ fontWeight: 700, fontSize: "18px", textAlign: "center" }}
            >
              {ele?.amountWithVAT}
            </p>
          </div>

          <div className={style.bodyContent} style={{ flexBasis: "204px" }}>
            <div className={style.statusIconDiv}>
              <div style={{ flexBasis: "140px" }}>
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

export default PrejetiAdvance;
