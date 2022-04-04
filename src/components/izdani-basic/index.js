import React, { useContext } from "react";

import Card from "components/card";
import Checkbox from "components/checkbox";

import style from "./izdani-basic.module.scss";
import moreIcon from "assets/icons/more-icon.svg";
import rightArrow from "assets/icons/right-arrow-blue.svg";
import BasicAdvanceRadio from "components/basic-advance-radio";
import { FinanceContext } from "finance-client-context";

const IzdaniBasic = ({
  className,
  tableBody,
  open,
  setOpen,
  handleBasicAdvanceFn,
  basicAdvanceVal,
  handleNavigate,
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
          style={{ flexBasis: "155px", textAlign: "center" }}
        >
          <p>Due</p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "242px", textAlign: "center" }}
        >
          <p>
            Amount without
            <br />
            VAT
          </p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "308px", textAlign: "center" }}
        >
          <p>
            Amount with
            <br />
            VAT
          </p>
        </div>

        <div className={style.headerContent} style={{ flexBasis: "66px" }}>
          <div className={style.imgDiv}>
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

      {/* Body */}

      {tableBody?.length > 0 &&
        tableBody?.map((ele) => (
          <div className={style.cardBody} key={ele?.id}>
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
              style={{ flexBasis: "155px", textAlign: "center" }}
            >
              <p className={style.p}>{ele?.dueLateDate}</p>
            </div>

            <div
              className={style.bodyContent}
              style={{ flexBasis: "242px", textAlign: "center" }}
            >
              <p className={style.p}>{ele?.amountWithOutVAT}</p>
            </div>

            <div className={style.bodyContent} style={{ flexBasis: "308px" }}>
              <p
                className={style.p}
                style={{
                  fontWeight: 700,
                  fontSize: "18px",
                  textAlign: "center",
                }}
              >
                {ele?.amountWithVAT}
              </p>
            </div>

            <div className={style.bodyContent} style={{ flexBasis: "66px" }}>
              <div className={style.imgDiv}>
                <img
                  src={rightArrow}
                  alt=""
                  onClick={() => handleNavigate && handleNavigate(ele?.id)}
                />
              </div>
            </div>
          </div>
        ))}
    </Card>
  );
};

export default IzdaniBasic;
