import React, { useContext } from "react";

import Predracun from "components/predracun";
import { FinanceContext } from "finance-client-context";

import style from "./proforma.module.scss";

const ProformaTable = () => {
  const {
    handleColumnChange,
    handleRowCheckboxChange,
    rowCheckboxName,
    columnCheckbox,
    tableData,
  } = useContext(FinanceContext);

  return (
    <div className={style.tableWrapper}>
      <Predracun
        className={style.tableContent}
        tableBody={tableData}
        handleRowChange={handleRowCheckboxChange}
        handleColumnChange={handleColumnChange}
        checkboxRowName={rowCheckboxName}
        columnCheckbox={columnCheckbox}
      />
    </div>
  );
};

export default ProformaTable;
