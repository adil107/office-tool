import React, { useState } from "react";

import Card from "components/card";

import style from "./bill-indexing.module.scss";
import downArrowBlue from "assets/icons/arrow down-blue.svg";
import deleteIcon from "assets/icons/delete-icon.svg";
import barIcon from "assets/icons/bar-icon.svg";
import { NavDropdown } from "components/nav-dropdown";
import Select from "components/select";

const BillIndexingDeleteIcon = ({
  indexing,
  optionList,
  open,
  setOpen,
  selectVal,
  setSelectVal,
  marginClass,
}) => {
  const [openCount, setOpenCount] = useState(null);
  const [openE, setOpenE] = useState(false);
  const [select, setSelect] = useState("EUR");

  const handleOpen = (index) => {
    if (index === openCount) {
      setOpenCount(null);
      setOpen(!open);
    } else {
      setOpenCount(index);
      setOpen(!open);
    }
  };
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
          style={{
            display: "flex",
            flexBasis: "249px",
            paddingLeft: "20px",
            textAlign: "left",
            position: "relative",
          }}
        >
          <p className={style.p}>Amount with VAT</p>
          <>
            <Select
              optionList={options}
              open={openE}
              selectVal={select}
              setSelectVal={setSelect}
              setOpen={setOpenE}
              className={style.eurSelectDiv}
              inputClass={style.inputClass}
              optionClassName={style.optionStyle}
            />
          </>
        </div>
      </div>

      {/* Body */}
      {indexing?.map((ele, index) => (
        <div className={style.cardBody} key={index}>
          <div className={style.bodyContent} style={{ flexBasis: "60px" }}>
            <img src={barIcon} alt="" style={{ cursor: "pointer" }} />
          </div>

          <div
            className={style.bodyContent}
            style={{ flexBasis: "402px", textAlign: "left" }}
          >
            <p className={style.p}>{ele.service}</p>
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
              position: "relative",
            }}
          >
            <div style={{ display: "flex", alignItems: "center" }}>
              <p className={style.p}>{ele.vat}</p>
              <img
                src={downArrowBlue}
                alt=""
                style={{
                  width: "18px",
                  height: "18px",
                  margin: "-2px 0 0 5px",
                  cursor: "pointer",
                }}
                onClick={() => handleOpen(index)}
              />
            </div>
            <div className={style.dropdownWrapperDiv}>
              {open && openCount === index && (
                <NavDropdown
                  dropdownList={optionList}
                  open={open}
                  active={selectVal}
                  setActive={setSelectVal}
                  setOpen={(boolean) => {
                    setOpen(boolean);
                    setOpenCount(null);
                  }}
                  className={style.navDropdownStyle}
                />
              )}
            </div>
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
            <p className={style.p}>{ele.amountVatur}</p>

            <img src={deleteIcon} alt="" style={{ cursor: "pointer" }} />
          </div>
        </div>
      ))}
    </Card>
  );
};

export default BillIndexingDeleteIcon;

const options = [
  {
    shortName: "EUR",
  },
  {
    shortName: "USD",
  },
  {
    shortName: "JPY",
  },
];
