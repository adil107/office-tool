import React, { useState } from "react";

import Card from "components/card";
import DatePicker from "components/date-picker";
import SelectWithSearch from "components/select-width-search";
import TextField from "components/text-field";
import AddClientModal from "./add-client-modal";

import style from "./new_document.module.scss";

const BasicInfoContract = () => {
  const [contractDate, setContractDate] = useState(new Date());
  const [returnDate, setReturnDate] = useState(new Date());
  const [firstContractOpen, setFirstContractOpen] = useState(false);
  const [secondContractOpen, setSecondContractOpen] = useState(false);
  const [selectFirstContract, setSelectFirstContract] = useState(
    "Bignest Kilring d.o.o"
  );
  const [selectSecondContract, setSelectSecondContract] =
    useState("Petrol d.d.");

  const [openClientModal, setOpenClientModal] = useState(false);

  return (
    <>
      <Card className={style.basicInfoCard}>
        <div className={style.basicInfoWrapper}>
          <h1 className={style.title}>Basic contract info</h1>
          <div className={style.flex}>
            <DatePicker
              label="Date of contract"
              dateValue={contractDate}
              handleChange={(date) => {
                setContractDate(date);
              }}
              id="Date of contract"
              className={style.datePicker}
            />

            <TextField
              className={style.textField}
              label="Location of signing"
              placeholder="Ljubljana"
            />
          </div>

          <div className={style.flex}>
            <SelectWithSearch
              label="First contract party"
              optionList={firstContractList}
              open={firstContractOpen}
              setOpen={setFirstContractOpen}
              placeholder="Isci stranko"
              buttonText="Dodaj stranko"
              selectVal={selectFirstContract}
              setSelectVal={setSelectFirstContract}
              className={style.datePicker}
              handleButtonClick={() => setOpenClientModal(true)}
            />

            <SelectWithSearch
              label="Second contract party"
              optionList={secondContractList}
              open={secondContractOpen}
              setOpen={setSecondContractOpen}
              placeholder="Isci stranko"
              buttonText="Dodaj stranko"
              selectVal={selectSecondContract}
              setSelectVal={setSelectSecondContract}
              className={style.selectSearch}
              handleButtonClick={() => setOpenClientModal(true)}
            />
          </div>
        </div>

        <div className={style.basicInfoWrapper} style={{ paddingTop: "25px" }}>
          <h1 className={style.title}>Agreement body</h1>
          <div className={style.flex}>
            <TextField
              className={style.textFieldAgreement}
              label="Amount"
              placeholder="10.000,00 EUR"
            />
            <TextField
              className={style.textField}
              label="Security"
              placeholder="Mercedes S500 ( LJ-123-AS )s"
            />
          </div>
          <div className={style.flex}>
            <TextField
              className={style.textFieldAgreement}
              label="Interest rate"
              placeholder="5%"
            />
            <TextField
              className={style.textField}
              label="Misc"
              placeholder="Input"
            />
          </div>

          <div className={style.flex}>
            <DatePicker
              label="Return date"
              dateValue={returnDate}
              handleChange={(date) => {
                setReturnDate(date);
              }}
              id="Return date"
              className={style.datePicker}
            />
          </div>
        </div>
      </Card>

      <AddClientModal open={openClientModal} setOpen={setOpenClientModal} />
    </>
  );
};

export default BasicInfoContract;

const firstContractList = [
  { shortName: "Bignest Kilring d.o.o" },

  { shortName: "Stranka 1" },
  { shortName: "Stranka 2" },
  { shortName: "Stranka 3" },
  { shortName: "Stranka 4" },
  { shortName: "Stranka 5" },
  { shortName: "Stranka 6" },
  { shortName: "Stranka 7" },
  { shortName: "Stranka 8" },
  { shortName: "Stranka 9" },
  { shortName: "Stranka 10" },
  { shortName: "Stranka 11" },
];

const secondContractList = [
  { shortName: "Petrol d.d." },

  { shortName: "Stranka 1" },
  { shortName: "Stranka 2" },
  { shortName: "Stranka 3" },
  { shortName: "Stranka 4" },
  { shortName: "Stranka 5" },
  { shortName: "Stranka 6" },
  { shortName: "Stranka 7" },
  { shortName: "Stranka 8" },
  { shortName: "Stranka 9" },
  { shortName: "Stranka 10" },
  { shortName: "Stranka 11" },
];
