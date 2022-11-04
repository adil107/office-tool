import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import md5 from "md5";
import { useDispatch, useSelector } from "react-redux";

import Button from "components/button";
import Modal from "components/modal";
import TextField from "components/text-field";
import axios from "utils/axios";
import { change_password } from "utils/endpoints";
import { createNotification } from "common/create-notification";
import { UPDATE_TOKEN } from "redux/constants";
import { updatePasswordSchema } from "./helper";

import eye from "assets/legal_financial/eye.svg";
import eyeBlue from "assets/legal_financial/eye-blue.svg";
import style from "./account.module.scss";

const ChangePassword = ({ open, setOpen }) => {
  const [hideShowPassword, setHideShowPassword] = useState({
    oldPasswordHideShow: false,
    newPasswordHideShow: false,
    confirmNewPasswordHideShow: false,
  });
  const [isLoading, setIsLoading] = useState(false);

  const { token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(updatePasswordSchema),
  });

  const formSubmit = async (data) => {
    setIsLoading(true);
    const tempData = {
      token: "demo",
      userToken: token,
      oldPassword: md5(data?.oldPassword),
      newPassword: md5(data?.newPassword),
    };

    const res = await axios.post(change_password, tempData);
    if (res.data?.error === 0) {
      createNotification("success", "Success", res?.data?.msg);
      localStorage.setItem("authToken", JSON.stringify(res.data.userToken));
      dispatch({ type: UPDATE_TOKEN, payload: { token: res.data.userToken } });
      setOpen(false);
    } else {
      createNotification("error", "Error", res?.data?.msg);
    }
    setIsLoading(false);
  };

  return (
    <form className={style.changePassword} onSubmit={handleSubmit(formSubmit)}>
      <Modal
        open={open}
        handleClose={() => setOpen(false)}
        className={style.modal}
      >
        <p className={style.modalTitle}>Change password</p>
        <div className={style.textFields}>
          <TextField
            label="Staro geslo"
            placeholder="********"
            name="oldPassword"
            type={hideShowPassword?.oldPasswordHideShow ? "text" : "password"}
            icon={hideShowPassword?.oldPasswordHideShow ? eyeBlue : eye}
            register={register}
            errorMessage={errors?.oldPassword?.message}
            handleIconClick={() =>
              setHideShowPassword({
                ...hideShowPassword,
                oldPasswordHideShow: !hideShowPassword?.oldPasswordHideShow,
              })
            }
          />
        </div>
        <div className={style.textFields}>
          <TextField
            label="Novo geslo"
            placeholder="********"
            name="newPassword"
            type={hideShowPassword?.newPasswordHideShow ? "text" : "password"}
            icon={hideShowPassword?.newPasswordHideShow ? eyeBlue : eye}
            register={register}
            errorMessage={errors?.newPassword?.message}
            handleIconClick={() =>
              setHideShowPassword({
                ...hideShowPassword,
                newPasswordHideShow: !hideShowPassword?.newPasswordHideShow,
              })
            }
          />
        </div>
        <div className={style.textFields}>
          <TextField
            label="Ponovi novo geslo"
            placeholder="********"
            name="confirmNewPassword"
            type={
              hideShowPassword?.confirmNewPasswordHideShow ? "text" : "password"
            }
            icon={hideShowPassword?.confirmNewPasswordHideShow ? eyeBlue : eye}
            register={register}
            errorMessage={errors?.confirmNewPassword?.message}
            handleIconClick={() =>
              setHideShowPassword({
                ...hideShowPassword,
                confirmNewPasswordHideShow:
                  !hideShowPassword?.confirmNewPasswordHideShow,
              })
            }
          />
        </div>
        <div className={style.modalFlex}>
          <Button
            title="Potrdi spremembe"
            type={"submit"}
            isLoading={isLoading}
            className={style.btn1}
          />
          <Button
            title="Prekliči"
            className={style.modalBtn}
            handleClick={() => setOpen(false)}
          />
        </div>
      </Modal>
    </form>
  );
};

export default ChangePassword;
