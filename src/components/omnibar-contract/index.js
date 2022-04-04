import React from "react";

import Card from "components/card";
import Button from "components/button";

import style from "./omnibar-contract.module.scss";
import editIcon from "assets/icons/edit-icon.svg";
import emailIcon from "assets/icons/email-icon.svg";
import downloadIcon from "assets/icons/download-icon.svg";

export const OmnibarContract = ({ setOpen }) => {
  return (
    <Card className={style.cardWrapper}>
      <div className={style.cardContentWrapper}>
        <div
          className={style.leftDiv}
          style={{ display: "flex", flexBasis: "470px" }}
        >
          <div className={style.contentDiv} style={{ flexBasis: "220px" }}>
            <small>Contract template</small>
            <p>Loan agreement</p>
          </div>

          <div className={style.contentDiv} style={{ flexBasis: "350px" }}>
            <small>Send to email</small>
            <div style={{ display: "flex" }}>
              <p>info@bignest.com</p>
              <img
                src={editIcon}
                alt=""
                onClick={() => setOpen(true)}
                style={{
                  marginLeft: "27px",
                  cursor: "pointer",
                  position: "relative",
                  bottom: "2px",
                }}
              />
            </div>
          </div>
        </div>

        <div className={style.btnDiv}>
          <Button title="Download" className={style.btn} icon={downloadIcon} />
          <Button
            title="Send to email"
            className={style.btn}
            icon={emailIcon}
          />
        </div>
      </div>
    </Card>
  );
};
