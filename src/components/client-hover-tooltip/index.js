import React from "react";

import style from "./tooltip-hover.module.scss";

import liquidation from "assets/icons/liquidation.svg";
import owner from "assets/icons/owner.svg";
import rek from "assets/icons/rek.svg";
import tax from "assets/icons/tax.svg";

const ClientHoverTooltip = ({
  icon,
  tittle,
  tooltipBodyText,
  tooltipClass,
}) => {
  return (
    <div className={style.wrapper}>
      <div>
        <div className={style.imgDiv}>
          <img src={iconObj[tittle]} alt="" />
        </div>
        <div className={style.tittleDiv}>
          <p>{tittle || "Liquidation"}</p>
        </div>
      </div>

      {/* Tooltip Open */}

      <div className={`${style.tooltipWrapper} ${tooltipClass}`}>
        <div style={{ position: "relative", zIndex: 5 }}>
          <h2 className={style.tooltipTittle}>{tittle || "Liquidation"}</h2>
          <p className={style.tooltipBody}>
            {tooltipBodyText || "Company is the process of liquidation"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClientHoverTooltip;

const iconObj = {
  Liquidation: liquidation,
  Neplačnik: rek,
  "Nov lastnik": owner,
  Davki: tax,
};
