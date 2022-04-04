import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";

import IzdaniBasic from "components/izdani-basic";

import style from "./issue.module.scss";
import { FinanceContext } from "finance-client-context";

const BasicTable = ({
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
      <IzdaniBasic
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

export default BasicTable;
