import React, { useState } from "react";

import { Navbar } from "components/layout/navbar";
import Omnibar from "components/omnibar";
import OmnibarSelected from "components/omnibar-selected";
import ModuleContext from "finance-client-context";
import ProformaTable from "./proforma-table";
import { btnList, tableData, tabsList } from "./helper";

import style from "./proforma.module.scss";

const Proforma = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [selectCheckboxVal, setSelectCheckboxVal] = useState([]);

  return (
    <ModuleContext
      tableData={tableData}
      selectCheckboxVal={selectCheckboxVal}
      setSelectCheckboxVal={setSelectCheckboxVal}
    >
      <Navbar title="Predračuni" />
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
      </div>

      <ProformaTable />
    </ModuleContext>
  );
};

export default Proforma;
