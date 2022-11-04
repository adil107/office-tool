import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";

import Modal from "components/modal";
import TextField from "components/text-field";
import Button from "components/button";
import axios from "utils/axios";
import { fetchMyCompany } from "redux/actions";
import { createNotification } from "common/create-notification";
import { add_company, external_company } from "utils/endpoints";

import style from "./account.module.scss";

const AddCompanyModal = ({ open, setOpen }) => {
  const [companySearchResult, setCompanySearchResult] = useState({});
  const [searchLoading, setSearchLoading] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const { register, handleSubmit, watch } = useForm({
    mode: "all",
  });

  const { first, second } = watch();

  const formSubmit = async (data) => {
    const tempData = {
      token: "demo",
      taxNumber: data?.first ? data?.first : data?.second,
      userToken: token,
      companyType: data?.first ? "sloLegal" : "foreignLegal",
    };
    setSearchLoading(true);

    if (tempData?.taxNumber?.length) {
      const res = await axios.post(external_company, tempData);
      if (res?.data?.error === 0) {
        setCompanySearchResult({ ...res.data?.searchResult });
      }
      setSearchLoading(false);
    }
  };

  const handleCompanyAdd = async () => {
    if (first?.length || second?.length) {
      setIsLoading(true);
      const tempData = {
        token: "demo",
        taxNumber: first ? first : second,
        userToken: token,
      };
      const res = await axios.post(add_company, tempData);
      if (res?.data?.error === 0) {
        createNotification("success", "Success", res?.data?.msg);
        dispatch(fetchMyCompany());
      } else {
        createNotification("error", "Error", res?.data?.msg);
      }
      setIsLoading(false);
    }
  };

  return (
    <div className={style.addCompanyModal}>
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        className={style.modal}
      >
        <div className={style.headerDiv}>
          <p className={style.modalTitle}>Dodaj svoje podjetje</p>
          <form onSubmit={handleSubmit(formSubmit)}>
            <div className={style.textFieldDiv}>
              <TextField
                className={style.textField}
                label="Matična številka"
                type="text"
                name="first"
                register={register}
                disabled={second?.length > 0}
              />
              <p className={style.p}>ali</p>
            </div>
            <div className={style.textFieldDiv}>
              <TextField
                className={style.textField}
                label="Davčna številka"
                type="number"
                name="second"
                register={register}
                disabled={first?.length > 0}
              />
              <Button
                title="Išči stranko"
                className={style.btn1}
                isLoading={searchLoading}
              />
            </div>
          </form>
        </div>

        <div className={style.modalBodyDiv}>
          <h1>{companySearchResult?.shortName}</h1>
          <p>{companySearchResult?.address}</p>
          <p>{companySearchResult?.post}</p>
          <p>{companySearchResult?.city}</p>
        </div>

        <div className={style.modalFlex}>
          <Button
            title="Dodaj podjetje"
            className={style.btn2}
            disabled={!first?.length && !second?.length}
            isLoading={isLoading}
            handleClick={() => handleCompanyAdd()}
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

export default AddCompanyModal;
