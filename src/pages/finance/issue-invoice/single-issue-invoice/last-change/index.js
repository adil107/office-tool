import React, { Fragment } from "react";

import Card from "components/card";

import style from "./last-change.module.scss";
import help from "assets/legal_financial/help-client.svg";
import rightArrow from "assets/icons/right-arrow-blue.svg";
import Button from "components/button";

const IssueLastChange = () => {
  return (
    <>
      <Card className={style.card}>
        <div className={style.lastChange}>
          <div className={style.leftDiv}>
            <div>
              <div className={style.flex}>
                <p className={style.companyTitle}>Last change</p>
                <img src={help} alt="" className={style.helpImg} />
              </div>
              <ul className={style.li}>
                <li>Blocked account</li>
                <li>Change of name</li>
                <li>Change of address</li>
              </ul>
            </div>
            <div style={{ marginTop: "20px" }}>
              <p className={style.checkChange}>Check detailed changes at:</p>
              <p className={style.companyTitle}> My Clients</p>
              <div className={style.myClientArrow}>
                <p>Go to My Clients</p>
                <img src={rightArrow} alt="" style={{ cursor: "pointer" }} />
              </div>
            </div>
          </div>
          <div style={{ flex: "1", display: "flex", alignItems: "center" }}>
            <div className={style.rightDiv}>
              {btnList?.map((ele, index) => (
                <Fragment key={index}>
                  <Button title={ele.title} className={style.btn} />
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default IssueLastChange;

const btnList = [
  { title: "Možnost kompenzcije" },
  { title: "Prijava terjatve v stečaju" },
  { title: "Prijava terjatve  v stečaju" },
  { title: "Možnost kompenzcije" },
  { title: "Vložitev ivršbe" },
  { title: "Analiza situacije - pokliči Žigo" },
  { title: "Analiza situacije - pokliči Žigo" },
  { title: "Vložitev ivršbe" },
];
