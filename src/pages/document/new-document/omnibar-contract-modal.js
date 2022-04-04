import React from "react";

import Modal from "components/modal";

import style from "./new_document.module.scss";
import TextField from "components/text-field";
import Button from "components/button";

const OmnibarContractModal = ({ open, setOpen }) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Modal open={open} handleClose={handleClose} className={style.OmnibarModal}>
      <div className={style.contentWrapper}>
        <h1 className={style.title}>Vpišite email prejemnika</h1>
        <div className={style.inputFieldDiv}>
          <TextField
            className={style.inputField}
            placeholder="example@gmail.com"
          />
        </div>

        <div className={style.btnDiv}>
          <Button
            className={style.btn1}
            title="Potrdi"
            handleClick={handleClose}
          />
          <Button
            className={style.btn1}
            title="Prekliči"
            handleClick={handleClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export default OmnibarContractModal;
