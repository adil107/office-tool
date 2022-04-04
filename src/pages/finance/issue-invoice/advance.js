import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { FinanceContext } from "finance-client-context";

import style from "./issue.module.scss";
import IzdaniAdvance from "components/izdani-advance";

const AdvanceTable = ({
  toggleTableOpen,
  setToggleTableOpen,
  handleBasicAdvanceFn,
  basicAdvanceVal,
}) => {
  const { tableData } = useContext(FinanceContext);

  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/finance/issue-invoice/${id}`);
  };

  return (
    <div className={style.tableWrapper}>
      <IzdaniAdvance
        className={style.tableContent}
        tableBody={tableData}
        open={toggleTableOpen}
        setOpen={setToggleTableOpen}
        handleBasicAdvanceFn={handleBasicAdvanceFn}
        basicAdvanceVal={basicAdvanceVal}
        handleNavigate={handleNavigate}
      />
    </div>
  );
};

export default AdvanceTable;
