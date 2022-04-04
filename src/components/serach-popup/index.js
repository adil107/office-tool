import React, { useState } from "react";

import DatePicker from "components/date-picker";
import Select from "components/select";

import style from "./search.module.scss";
import cross from "assets/navbar/Group.svg";
import Button from "components/button";
import TextField from "components/text-field";

const SearchPopup = ({ open, setOpen }) => {
  const [contractDate, setContractDate] = useState(new Date());
  const [dateVal, setDateVal] = useState(new Date());
  const [amount, setAmount] = useState(new Date());
  const [amountDate, setAmountDate] = useState(new Date());

  const [select, setSelect] = useState("Placani");
  const [selectLate, setSelectLate] = useState("Nad 30 dni");

  const [openSelect, setOpenSelect] = useState(false);
  const [openSelectLate, setOpenSelectLate] = useState(false);

  return (
    <>
      <div
        className={style.overlay}
        onClick={() => setOpen && setOpen(false)}
      ></div>
      <div className={style.contentDiv}>
        <div className={style.firstFlex}>
          <label className={style.label}>Filters</label>
          <img src={cross} onClick={() => setOpen && setOpen(false)} alt="" />
        </div>
        <div className={style.dob}>
          <DatePicker
            label="Period"
            dateValue={contractDate}
            handleChange={(date) => {
              setContractDate(date);
            }}
            id="period"
            inputClass={style.date}
          />
          <p className={style.do}>do</p>
          <DatePicker
            dateValue={dateVal}
            handleChange={(date) => {
              setDateVal(date);
            }}
            id="date"
            inputClass={style.date}
          />
        </div>
        <div className={style.searchWidth}>
          <Select
            label="Status"
            optionList={options}
            open={openSelect}
            selectVal={select}
            setSelectVal={setSelect}
            setOpen={setOpenSelect}
            inputClass={style.date}
          />
        </div>
        <div className={style.dob} style={{ marginTop: "26px" }}>
          <TextField label="Amount" placeholder="10.000,00 €" />
          <p className={style.do}>do</p>
          <TextField placeholder="20.000,00 €" />
        </div>
        <div className={style.searchWidth}>
          <Select
            label="Late"
            optionList={optionsLate}
            open={openSelectLate}
            selectVal={selectLate}
            setSelectVal={setSelectLate}
            setOpen={setOpenSelectLate}
            inputClass={style.date}
          />
        </div>
        <Button title="Confirm" className={style.btn} />
      </div>
    </>
  );
};

export default SearchPopup;

const options = [
  { id: 1, shortName: "Placani" },
  { id: 2, shortName: "Racuna" },
];

const optionsLate = [
  { id: 1, shortName: "Nad 30 dni" },
  { id: 2, shortName: "Nad 40 dni" },
];
