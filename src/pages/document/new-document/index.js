import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "components/layout/navbar";
import { OmnibarContract } from "components/omnibar-contract";
import BasicInfoContract from "./basic-contract-info";
import OmnibarContractModal from "./omnibar-contract-modal";

const NewDocumentPage = () => {
  const navigate = useNavigate();
  const [openOmnibarModal, setOpenOmnibarModal] = useState(false);

  return (
    <>
      <Navbar
        title="New document"
        backArrow={true}
        handleBack={() => navigate("/documents")}
      />
      <OmnibarContract setOpen={setOpenOmnibarModal} />
      <BasicInfoContract />

      <OmnibarContractModal
        open={openOmnibarModal}
        setOpen={setOpenOmnibarModal}
      />
    </>
  );
};

export default NewDocumentPage;
