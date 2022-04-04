import React, { useState } from "react";

import TextField from "components/text-field";
import style from "./add-modal.module.scss";

import Button from "components/button";
import Select from "components/select";

const Person = ({ setModal }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectVal, setSelectVal] = useState("Slovenija");

  return (
    <>
      <div className={style.headerDiv} style={{ borderBottom: "none" }}>
        <TextField
          label="Name"
          type="text"
          placeholder="Anže Baksa"
          className={style.fieldStyle}
        />
        <TextField
          label="Address"
          type="text"
          placeholder="Celovška 291"
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
            placeholder="1000"
            className={style.widthClass}
          />

          <TextField
            label="City"
            type="text"
            placeholder="LJubljana"
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

export default Person;

const optionList = [{ shortName: "Slovenija" }, { shortName: "Pakistan" }];
