import React, { useState } from "react";

import TextField from "components/text-field";
import style from "./add-modal.module.scss";

import Button from "components/button";
import Select from "components/select";

const ForeignCompany = ({ setModal }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectVal, setSelectVal] = useState("Sweden");

  return (
    <>
      <div className={style.headerDiv} style={{ borderBottom: "none" }}>
        <TextField
          label="Company name"
          type="text"
          placeholder="Uber"
          className={style.fieldStyle}
        />
        <TextField
          label="VAT number"
          type="text"
          placeholder="Uber"
          className={style.fieldStyle}
        />
        <TextField
          label="Address"
          type="text"
          placeholder="12345678901234"
          className={style.fieldStyle}
        />
        <div
          className={style.fieldStyle}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <TextField
            label="ZIP code"
            type="number"
            placeholder="12345"
            className={style.widthClass}
          />

          <TextField
            label="City"
            type="text"
            placeholder="Oslo"
            className={style.widthClass}
          />
        </div>
        <div style={{ marginTop: "50px" }}>
          <Select
            label="Country"
            optionList={optionList}
            open={selectOpen}
            setOpen={setSelectOpen}
            selectVal={selectVal}
            setSelectVal={setSelectVal}
            className={style.fieldStyle1}
          />
        </div>
      </div>

      <div className={style.modalFlex}>
        <Button
          title="Add client"
          className={style.btn2}
          handleClick={() => setModal(false)}
        />
        <Button
          title="Cancel"
          className={style.modalBtn}
          handleClick={() => setModal(false)}
        />
      </div>
    </>
  );
};

export default ForeignCompany;

const optionList = [{ shortName: "Sweden" }, { shortName: "Pakistan" }];
