import React, { useState } from "react";

import Card from "components/card";

import style from "./new-invoice-data.module.scss";
import SelectDataInfo from "./select-data-info";
import LoanSelectInvoice from "./loan-select";
import BillIndexingDeleteIcon from "components/bill-indexing-delete-icon";
import IssuedFooter from "./issued-footer";

const NewDataInvoice = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("22%");
  const [billIndexingArr, setBillingIndexingArr] = useState([...indexing]);

  return (
    <>
      <Card className={style.card}>
        <div className={style.borderPadding}>
          <SelectDataInfo />
          <LoanSelectInvoice />
        </div>
        <div style={{ marginTop: "30px", padding: "0px 20px" }}>
          <BillIndexingDeleteIcon
            indexing={billIndexingArr}
            optionList={options}
            open={open}
            selectVal={select}
            setSelectVal={setSelect}
            setOpen={setOpen}
          />
          <IssuedFooter
            indexingArr={billIndexingArr}
            setIndexingArr={setBillingIndexingArr}
          />
        </div>
      </Card>
    </>
  );
};

export default NewDataInvoice;

const indexing = [
  {
    service: "Service X",
    amount: "1",
    price: "100,00",
    vat: "22%",
    vatur: "22,00",
    amountVatur: "122,00",
  },
  {
    service: "Storitev Y",
    amount: "1",
    price: "100,00",
    vat: "22%",
    vatur: "22,00",
    amountVatur: "122,00",
  },
  {
    service: "Storitev Z",
    amount: "1",
    price: "100,00",
    vat: "22%",
    vatur: "22,00",
    amountVatur: "122,00",
  },
  {
    service: "Storitev A",
    amount: "1",
    price: "100,00",
    vat: "22%",
    vatur: "22,00",
    amountVatur: "122,00",
  },
];

const options = [
  {
    id: 1,
    shortName: "0%",
  },
  {
    id: 2,
    shortName: "5%",
  },
  {
    id: 3,
    shortName: "9.5%",
  },
  {
    id: 4,
    shortName: "16%",
  },
  {
    id: 5,
    shortName: "22%",
  },
];
