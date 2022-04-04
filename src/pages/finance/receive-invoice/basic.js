import React, { useContext } from "react";

import IzdaniBasic from "components/izdani-basic";

import style from "./receive.module.scss";
import { FinanceContext } from "finance-client-context";

const BasicTable = ({
  toggleTableOpen,
  setToggleTableOpen,
  handleBasicAdvanceFn,
  basicAdvanceVal,
}) => {
  const { tableData } = useContext(FinanceContext);

  return (
    <div className={style.tableWrapper}>
      <IzdaniBasic
        className={style.tableContent}
        tableBody={tableData}
        open={toggleTableOpen}
        setOpen={setToggleTableOpen}
        handleBasicAdvanceFn={handleBasicAdvanceFn}
        basicAdvanceVal={basicAdvanceVal}
      />
    </div>
  );
};

export default BasicTable;
