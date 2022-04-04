import React, { useContext } from "react";

import PrejetiAdvance from "components/prejeti-advance";
import { FinanceContext } from "finance-client-context";

import style from "./receive.module.scss";

const AdvanceTable = ({
  toggleTableOpen,
  setToggleTableOpen,
  handleBasicAdvanceFn,
  basicAdvanceVal,
}) => {
  const { tableData } = useContext(FinanceContext);
  return (
    <div className={style.tableWrapper}>
      <PrejetiAdvance
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

export default AdvanceTable;
