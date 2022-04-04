import React, { useState } from "react";

import SelectWithSearch from "components/select-width-search";
import Checkbox from "components/checkbox";

import style from "./loan-select.module.scss";
import edit from "assets/icons/edit-icon.svg";
import deleteIcon from "assets/icons/delete-icon.svg";

const LoanSelectInvoice = () => {
  const [open, setOpen] = useState(false);

  const [openLoan, setOpenLoan] = useState(false);
  const [select, setSelect] = useState("Loan");

  return (
    <>
      <div className={style.loanDiv}>
        <SelectWithSearch
          optionList={loanOptions}
          open={openLoan}
          selectVal={select}
          setSelectVal={setSelect}
          placeholder="Brskaj po predlogah"
          setOpen={setOpenLoan}
          className={style.selectWidth}
        />
        <div className={style.checkboxLabel}>
          <Checkbox
            label={open ? "Welcome message" : "Pozdravno sporocilo"}
            handleChange={() => setOpen(!open)}
          />
        </div>
      </div>

      {open && (
        <div>
          <div className={style.debtor}>
            <p className={style.text}>Dear debtor,</p>
            <img src={edit} alt="" className={style.img} />
          </div>
          <div className={style.para}>
            <p>Thank you for ordering these services from us.....</p>
            <img src={edit} alt="" className={style.img} />
          </div>
        </div>
      )}
    </>
  );
};

export default LoanSelectInvoice;

const loanOptions = [
  {
    id: 1,
    shortName: "Loan",
    element: <img src={deleteIcon} alt="" />,
  },
  {
    id: 2,
    shortName: "Accounting",
    element: <img src={deleteIcon} alt="" />,
  },
  {
    id: 3,
    shortName: "PPP",
    element: <img src={deleteIcon} alt="" />,
  },
  {
    id: 4,
    shortName: "Rent",
    element: <img src={deleteIcon} alt="" />,
  },
];
