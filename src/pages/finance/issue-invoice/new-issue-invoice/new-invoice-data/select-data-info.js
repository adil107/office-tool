import React, { useState } from "react";

import style from "./new-invoice-data.module.scss";
import Select from "components/select";
import Button from "components/button";
import DatePicker from "components/date-picker";
import DebtorSearch from "components/debtor-search";
import AddClientModal from "./add-client-modal";

const SelectDataInfo = () => {
  const [open, setOpen] = useState(false);
  const [openDays, setOpenDays] = useState(false);
  const [modal, setModal] = useState(false);

  const [openYear, setOpenYear] = useState(false);
  const [openClient, setOpenClient] = useState(false);

  const [contractDate, setContractDate] = useState(new Date());
  const [dateVal, setDateVal] = useState(new Date());
  const [amount, setAmount] = useState(new Date());

  const [select, setSelect] = useState("Advance");
  const [selectYear, setSelectYear] = useState("2022");
  const [selectDays, setSelectDays] = useState("114");
  const [addClient, setAddClient] = useState("Client 1");

  return (
    <>
      <div className={style.firstDiv}>
        <div className={style.leftDiv}>
          <div style={{ width: "200px" }}>
            <Select
              label="Type of invoice"
              optionList={options}
              open={open}
              selectVal={select}
              setSelectVal={setSelect}
              setOpen={setOpen}
            />
          </div>
          <div style={{ marginTop: "30px" }}>
            <DebtorSearch
              label="Debtor"
              buttonText="Add client"
              optionList={optionsClient}
              open={openClient}
              selectVal={addClient}
              setSelectVal={setAddClient}
              setOpen={setOpenClient}
              handleButtonClick={() => setModal(true)}
            />
          </div>
        </div>
        <div className={style.rightDiv}>
          <div className={style.innerFirstDiv}>
            <p className={style.invoice}>Invoice no.</p>
            <div className={style.widthAdjust}>
              <div style={{ marginRight: "10px" }}>
                <Select
                  optionList={optionsDays}
                  open={openDays}
                  selectVal={selectDays}
                  setSelectVal={setSelectDays}
                  setOpen={setOpenDays}
                  className={style.days}
                  marginClass={style.marginTopClass}
                />
              </div>
              <div style={{ marginRight: "10px" }}>
                <Select
                  optionList={optionsYear}
                  open={openYear}
                  selectVal={selectYear}
                  setSelectVal={setSelectYear}
                  setOpen={setOpenYear}
                  className={style.year}
                />
              </div>
              <Button title="Preskoči" />
            </div>
          </div>
          <div className={style.innerFirstDiv}>
            <p className={style.invoice}>Date of issue</p>
            <div className={style.widthAdjust}>
              <DatePicker
                dateValue={contractDate}
                handleChange={(date) => {
                  setContractDate(date);
                }}
                id="period"
              />
            </div>
          </div>
          <div className={style.innerFirstDiv}>
            <p className={style.invoice}>Date of service period</p>
            <div className={style.widthAdjust}>
              <DatePicker
                dateValue={dateVal}
                handleChange={(date) => {
                  setDateVal(date);
                }}
                id="service"
              />
            </div>
          </div>
          <div className={style.innerFirstDiv}>
            <p className={style.invoice}>Due</p>
            <div className={style.widthAdjust}>
              <DatePicker
                dateValue={amount}
                handleChange={(date) => {
                  setAmount(date);
                }}
                id="due"
              />
            </div>
          </div>
        </div>
      </div>
      <AddClientModal modal={modal} setModal={setModal} />
    </>
  );
};

export default SelectDataInfo;

const options = [
  { id: 1, shortName: "Advance" },
  { id: 2, shortName: "Normal" },
  { id: 2, shortName: "Cancel" },
  { id: 2, shortName: "Proforma" },
];
const optionsDays = [
  { id: 1, shortName: "114" },
  { id: 2, shortName: "106" },
  { id: 2, shortName: "117" },
  { id: 2, shortName: "110" },
];
const optionsYear = [
  { id: 1, shortName: "2021" },
  { id: 2, shortName: "2022" },
];

const optionsClient = [
  { id: 1, shortName: "Client 1" },
  { id: 2, shortName: "Client 2" },
  { id: 2, shortName: "Stranka 3" },
  { id: 2, shortName: "Stranka 4" },
  { id: 2, shortName: "Stranka 5" },
  { id: 2, shortName: "Stranka 6" },
  { id: 2, shortName: "Stranka 7" },
  { id: 2, shortName: "Stranka 8" },
  { id: 2, shortName: "Stranka 9" },
  { id: 2, shortName: "Stranka 11" },
];
