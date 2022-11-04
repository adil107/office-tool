import React, { useState } from "react";

import { Navbar } from "components/layout/navbar";
import OmnibarSelected from "components/omnibar-selected";
import Omnibar from "components/omnibar";
import AdvanceTable from "./advance";
import BasicTable from "./basic";
import ModuleContext from "finance-client-context";
import { btnList, tableData, tabsList } from "./helper";

import positiveIcon from "assets/icons/positive.svg";
import style from "./issue.module.scss";

const IssueInvoice = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectCheckboxVal, setSelectCheckboxVal] = useState([]);
  const [toggleTableOpen, setToggleTableOpen] = useState(false);
  const [basicAdvanceVal, setBasicAdvanceVal] = useState("Advance");

  const handleBasicAdvanceFn = (e) => {
    setBasicAdvanceVal(e.target.value);
    setToggleTableOpen(false);
  };

  return (
    <ModuleContext
      tableData={tableData}
      setSelectCheckboxVal={setSelectCheckboxVal}
      selectCheckboxVal={selectCheckboxVal}
    >
      <Navbar title="Izdani računi" arrowIcon={positiveIcon} />
      <div className={style.headerBar}>
        {selectCheckboxVal?.length > 0 ? (
          <OmnibarSelected
            btnList={btnList}
            text={`No. of selected items: ${selectCheckboxVal?.length}`}
          />
        ) : (
          <Omnibar
            tabsList={tabsList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}

        {basicAdvanceVal === "Advance" ? (
          <AdvanceTable
            toggleTableOpen={toggleTableOpen}
            setToggleTableOpen={setToggleTableOpen}
            handleBasicAdvanceFn={handleBasicAdvanceFn}
            basicAdvanceVal={basicAdvanceVal}
          />
        ) : (
          <BasicTable
            toggleTableOpen={toggleTableOpen}
            setToggleTableOpen={setToggleTableOpen}
            handleBasicAdvanceFn={handleBasicAdvanceFn}
            basicAdvanceVal={basicAdvanceVal}
          />
        )}
      </div>
    </ModuleContext>
  );
};

export default IssueInvoice;
