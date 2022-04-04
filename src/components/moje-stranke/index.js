import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Card from "components/card";
import Checkbox from "components/checkbox";
import ClientHoverTooltip from "components/client-hover-tooltip";
import { FinanceContext } from "finance-client-context";

import style from "./moje.module.scss";
import rightArrow from "assets/icons/right-arrow-blue.svg";

const MojeStranke = ({ className, tableBody }) => {
  const navigate = useNavigate();
  const {
    handleColumnChange,
    handleRowCheckboxChange,
    rowCheckboxName,
    columnCheckbox,
  } = useContext(FinanceContext);

  const handleNavigate = (id) => {
    navigate(`/client-overview/${id}`);
  };

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
          style={{ flexBasis: "194px", textAlign: "left" }}
        >
          <p>Last change</p>
        </div>
        <div
          className={style.headerContent}
          style={{ flexBasis: "395px", textAlign: "left" }}
        >
          <p>Client</p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "241px", textAlign: "left" }}
        >
          <p>Exposure</p>
        </div>

        <div
          className={style.headerContent}
          style={{ flexBasis: "439px", textAlign: "left" }}
        >
          <p>New changes of status</p>
        </div>
      </div>

      {/* Body */}

      {tableBody.length > 0 &&
        tableBody?.map((ele, index) => (
          <div
            className={style.cardBody}
            key={index}
            style={{ zIndex: tableBody?.length - index }}
          >
            <div className={style.bodyContent} style={{ flexBasis: "33px" }}>
              <Checkbox
                handleChange={handleRowCheckboxChange}
                name={ele?.id}
                checked={rowCheckboxName[ele?.id]}
              />
            </div>

            <div
              className={style.bodyContent}
              style={{ flexBasis: "194px", textAlign: "left" }}
            >
              <p className={style.p} style={{ fontSize: "16px" }}>
                15.2.2022
              </p>
            </div>

            <div
              className={style.bodyContent}
              style={{ flexBasis: "395px", textAlign: "left" }}
            >
              <p
                className={style.p}
                style={{ fontWeight: 700, fontSize: "16px" }}
              >
                {ele.shortName}
              </p>
            </div>

            <div className={style.bodyContent} style={{ flexBasis: "241px" }}>
              <p
                className={style.p}
                style={{ fontWeight: 700, fontSize: "18px", textAlign: "left" }}
              >
                10.000,00 €
              </p>
            </div>

            <div className={style.bodyContent} style={{ flexBasis: "439px" }}>
              <div className={style.statusIconDiv}>
                <div className={style.hoverToolTipDiv}>
                  {status?.map((item, ind) => (
                    <div style={{ marginLeft: ind !== 0 && "17px" }} key={ind}>
                      <ClientHoverTooltip tittle={item} />
                    </div>
                  ))}
                </div>
                <div className={style.statusImgDiv}>
                  <img
                    src={rightArrow}
                    alt=""
                    style={{ cursor: "pointer" }}
                    onClick={() => handleNavigate(ele?.id)}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      {!tableBody?.length && (
        <div className={style.noDataDiv}>
          <h1>No Data Found</h1>
        </div>
      )}
    </Card>
  );
};

export default MojeStranke;

const status = ["Liquidation", "Neplačnik", "Nov lastnik", "Davki"];
