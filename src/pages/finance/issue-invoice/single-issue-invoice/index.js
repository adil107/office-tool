import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { Navbar } from "components/layout/navbar";

import style from "./new-issue.module.scss";
import OmnibarStatus from "components/omnibar-status";

import IssueLastChange from "./last-change";
import OverviewIssueInvoice from "./overview-issued-invoice";

const SingleIssueInvoice = () => {
  const [omnibarPopupOpen, setOmnibarPopupOpen] = useState(false);
  const [omnibarStatusVal, setOmnibarStatusVal] = useState("Paid");
  const navigate = useNavigate();
  return (
    <div className={style.heightMin}>
      <Navbar
        title="Issued invoice 1-2021"
        backArrow
        handleBack={() => navigate(-1)}
      />
      <OmnibarStatus
        open={omnibarPopupOpen}
        setOpen={setOmnibarPopupOpen}
        statusVal={omnibarStatusVal}
        setStatusVal={setOmnibarStatusVal}
      />

      <IssueLastChange />
      <OverviewIssueInvoice />
    </div>
  );
};

export default SingleIssueInvoice;
