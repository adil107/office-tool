import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "components/layout/navbar";
import OmnibarStatus from "components/omnibar-status";
import NewDataInvoice from "./new-invoice-data";

const NewIssueInvoice = () => {
  const [omnibarPopupOpen, setOmnibarPopupOpen] = useState(false);
  const [omnibarStatusVal, setOmnibarStatusVal] = useState("Paid");
  const navigate = useNavigate();
  return (
    <div style={{ paddingBottom: "20px" }}>
      <Navbar
        title="Issue a new invoice"
        backArrow
        subtitle="V izdelavi"
        handleBack={() => navigate(-1)}
      />
      <OmnibarStatus
        open={omnibarPopupOpen}
        setOpen={setOmnibarPopupOpen}
        statusVal={omnibarStatusVal}
        setStatusVal={setOmnibarStatusVal}
      />
      <NewDataInvoice />
    </div>
  );
};

export default NewIssueInvoice;
