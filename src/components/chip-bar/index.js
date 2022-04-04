import React from "react";

import style from "./chipbar.module.scss";

import doneImg from "assets/icons/done.svg";
import mailOpen from "assets/icons/mailOPEN.svg";
import mailSent from "assets/icons/mailSENT.svg";

const ChipBar = ({ status }) => {
  return (
    <div className={style.chipWrapper}>
      <div className={style.imgDiv}>
        <img
          src={
            status === "Paid"
              ? doneImg
              : status === "Poslano" || status === "Sent"
              ? mailSent
              : mailOpen
          }
          alt=""
        />
        <p className={style.p}>{status || "Plačano"}</p>
      </div>

      <div
        className={style.borderDiv}
        style={{ background: status === "Paid" ? "#0077FF" : "#CCE4FF" }}
      ></div>
    </div>
  );
};

export default ChipBar;
