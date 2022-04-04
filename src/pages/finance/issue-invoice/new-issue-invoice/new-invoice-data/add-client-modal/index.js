import React, { useState } from "react";

import Modal from "components/modal";

import style from "./add-modal.module.scss";

import Select from "components/select";
import LocalCompany from "./local-company";
import Person from "./person";
import ForeignCompany from "./foreign-company";

const AddClientModal = ({ modal, setModal }) => {
  const [selectOpen, setSelectOpen] = useState(false);
  const [selectVal, setSelectVal] = useState("Local company");

  return (
    <div className={style.addCompanyModal}>
      <Modal
        open={modal}
        handleClose={() => setModal(false)}
        className={style.modal}
      >
        <div className={style.headerDiv}>
          <p className={style.modalTitle}>Add new client</p>
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
        {selectVal === "Local company" && <LocalCompany setModal={setModal} />}
        {selectVal === "Person" && <Person setModal={setModal} />}
        {selectVal === "Foreign company" && (
          <ForeignCompany setModal={setModal} />
        )}
      </Modal>
    </div>
  );
};

export default AddClientModal;

const optionList = [
  { shortName: "Local company" },
  { shortName: "Person" },
  { shortName: "Foreign company" },
];
