import React, { useState } from "react";

import Modal from "components/modal";
import TextField from "components/text-field";

import style from "./new_document.module.scss";
import Button from "components/button";
import Select from "components/select";
import { optionList } from "./helper";

const AddClientModal = ({ open, setOpen }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectVal, setSelectVal] = useState("Pravna oseba");

  return (
    <div className={style.addCompanyModal}>
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        className={style.modal}
      >
        <div className={style.headerDiv}>
          <p className={style.modalTitle}>Add client</p>
          <div className={style.selectDiv}>
            <Select
              optionList={optionList}
              open={selectOpen}
              setOpen={setSelectOpen}
              selectVal={selectVal}
              setSelectVal={setSelectVal}
            />
          </div>
        </div>

        <div className={style.headerDiv}>
          <div className={style.textFieldDiv}>
            <TextField
              label="Matična številka"
              type="number"
              placeholder="12345678901112"
              className={style.textField}
            />
            <p className={style.p}>ali</p>
          </div>
          <div className={style.textFieldDiv}>
            <TextField
              label="Davčna številka"
              type="number"
              placeholder="987654321"
              className={style.textField}
            />
            <Button title="Išči stranko" className={style.btn1} />
          </div>
        </div>

        <div className={style.modalBodyDiv}>
          <h1>Bignest d.o.o.</h1>
          <p>Celovška 291</p>
          <p>1000 Ljubljana</p>
          <p>Slovenija</p>
        </div>

        <div className={style.modalFlex}>
          <Button
            title="Dodaj stranko"
            className={style.btn2}
            handleClick={() => setOpen(false)}
          />
          <Button
            title="Prekliči"
            className={style.modalBtn}
            handleClick={() => setOpen(false)}
          />
        </div>
      </Modal>
    </div>
  );
};

export default AddClientModal;
