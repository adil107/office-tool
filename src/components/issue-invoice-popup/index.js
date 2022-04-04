import React from "react";
import { useNavigate } from "react-router-dom";

import Card from "components/card";

import style from "./issue-invoice-popup.module.scss";
import IssueInvoice from "assets/navbar/issue-invoice.svg";
import IssueInvoice2 from "assets/navbar/Group 364.svg";
import IssueInvoice3 from "assets/navbar/Group 365.svg";

const IssueInvoicePopup = ({ open, setOpen }) => {
  const navigate = useNavigate();

  return (
    <>
      {open && (
        <div
          style={{ position: "fixed", inset: "0", zIndex: 1200 }}
          onClick={() => setOpen(false)}
        ></div>
      )}
      <div className={style.wrapper} style={{ top: open ? "15%" : "-370px" }}>
        <Card className={style.card}>
          <div
            className={style.contentDiv}
            onClick={() => {
              setOpen(false);
              navigate("/finance-issue-invoice");
            }}
          >
            <img src={IssueInvoice} alt="" />
            <p className={style.p}>Issue invoice</p>
          </div>
          <div className={style.contentDiv}>
            <img src={IssueInvoice2} alt="" />

            <p className={style.p}>Prejeti račun</p>
          </div>
          <div className={style.contentDiv}>
            <img src={IssueInvoice3} alt="" />

            <p className={style.p}>Predračun</p>
          </div>
        </Card>
      </div>
    </>
  );
};

export default IssueInvoicePopup;
