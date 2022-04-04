import React from "react";

import TextField from "components/text-field";

import style from "./add-modal.module.scss";

import Button from "components/button";

const LocalCompany = ({ setModal }) => {
  return (
    <>
      <div className={style.headerDiv}>
        <div className={style.textFieldDiv}>
          <TextField
            label="Company house"
            type="number"
            placeholder="12345678901112"
            className={style.textField}
          />
          <p className={style.p}>or</p>
        </div>
        <div className={style.textFieldDiv}>
          <TextField
            label="Tax number"
            type="number"
            placeholder="987654321"
            className={style.textField}
          />
          <Button title="Search" className={style.btn1} />
        </div>
      </div>
      <div className={style.modalBodyDiv}>
        <h1>Bignest d.o.o.</h1>
        <p>Celovška 291</p>
        <p>1000 Ljubljana</p>
        <p>Slovenija</p>
      </div>
      <div className={style.modalFlex} style={{ margin: "30px 20px 10px" }}>
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

export default LocalCompany;
