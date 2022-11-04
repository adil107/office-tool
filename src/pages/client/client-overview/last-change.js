import React, { Fragment } from "react";

import Card from "components/card";
import ClientHoverTooltip from "components/client-hover-tooltip";

import style from "./client-overview.module.scss";
import help from "assets/legal_financial/help-client.svg";
import Button from "components/button";
import { btnList, toolTip } from "./helper";

const ClientLastChange = () => {
  return (
    <>
      <Card className={style.card}>
        <div className={style.lastChange}>
          <div className={style.leftDiv}>
            <div className={style.flex}>
              <p className={style.companyTitle}>Last change</p>
              <img src={help} alt="" className={style.helpImg} />
            </div>
            <div className={style.lastChangeArr}>
              {toolTip.map((ele, index) => (
                <div className={style.clientTooltip} key={index}>
                  <ClientHoverTooltip
                    tittle={ele.title}
                    tooltipClass={style.tooltipClass}
                  />
                </div>
              ))}
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

export default ClientLastChange;
