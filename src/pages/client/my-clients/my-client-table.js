import React, { useContext } from "react";

import MojeStranke from "components/moje-stranke";
import { FinanceContext } from "finance-client-context";

import style from "./my-client.module.scss";

const MyClientTable = () => {
  const { tableData } = useContext(FinanceContext);

  return (
    <>
      <div className={style.tableWrapper}>
        <MojeStranke tableBody={tableData} className={style.tableContent} />
      </div>
    </>
  );
};

export default MyClientTable;
