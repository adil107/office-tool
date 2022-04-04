import React from "react";

import style from "./status.module.scss";
import doneImg from "assets/icons/done.svg";
import mailOpen from "assets/icons/mailOPEN.svg";
import mailSent from "assets/icons/mailSENT.svg";

const StatuePopup = ({ setOpen, status, setStatusVal }) => {
  return (
    <>
      <div
        className={style.overlay}
        onClick={() => setOpen && setOpen(false)}
      ></div>
      <div className={style.contentDiv}>
        {statusArr?.map((ele, index) => (
          <div
            className={style.imgDiv}
            key={index}
            onClick={() => {
              setStatusVal(ele?.status);
              setOpen(false);
            }}
          >
            <img src={ele?.icon} alt="" />
            <label
              className={style.label}
              style={{ fontWeight: ele?.status === status && 700 }}
            >
              {ele?.status}
            </label>

            {ele?.status === status && (
              <div
                className={style.borderDiv}
                style={{ background: "#0077FF" }}
              ></div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default StatuePopup;

const statusArr = [
  { status: "Sent", icon: mailSent },
  { status: "Open", icon: mailOpen },
  { status: "Paid", icon: doneImg },
];
