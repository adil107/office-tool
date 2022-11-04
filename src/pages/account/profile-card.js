import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";

import Card from "components/card";
import TextField from "components/text-field";
import Button from "components/button";
import ChangePassword from "./change-password-modal";
import { createNotification } from "common/create-notification";
import axios from "utils/axios";
import { edit_profile } from "utils/endpoints";
import { updateUserProfile } from "redux/actions";

import style from "./account.module.scss";
import refresh from "assets/icons/refresh.svg";

const ProfileCard = () => {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { token, userData } = useSelector((state) => state.auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
    resolver: yupResolver(signUpSchema),
  });

  const dispatch = useDispatch();

  const formSubmit = async (data) => {
    const tempData = {
      token: "demo",
      firstName: data?.firstName,
      lastName: data.lastName,
      userToken: token,
      email: data?.email,
    };

    setIsLoading(true);
    const res = await axios.post(edit_profile, tempData);
    if (res.data?.error === 0) {
      createNotification("success", "Success", res?.data?.msg);
      const tempUserInfo = {
        ...userData,
        userInfo: {
          ...userData?.userInfo,
          firstName: tempData?.firstName,
          lastName: tempData?.lastName,
          email: tempData?.email,
        },
      };
      dispatch(updateUserProfile(tempUserInfo));
    } else {
      createNotification("error", "Error", res?.data?.msg);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    if (userData?.userInfo) {
      reset({ ...userData?.userInfo });
    }
  }, [userData, reset]);
  return (
    <>
      <Card className={style.card}>
        <h6 className={style.profile}>Profile</h6>
        <form className={style.grid} onSubmit={handleSubmit(formSubmit)}>
          <TextField
            label="Ime"
            placeholder="Janez"
            name="firstName"
            type="text"
            register={register}
            errorMessage={errors?.firstName?.message}
          />
          <TextField
            label="Email"
            placeholder="janez.novak@gmail.com"
            name="email"
            type="email"
            register={register}
            errorMessage={errors?.email?.message}
          />
          <TextField
            label="Geslo"
            placeholder="**********"
            name="password"
            type="password"
            disabled={true}
          />
          <TextField
            label="Priimek"
            placeholder="Novak"
            name="lastName"
            type="text"
            register={register}
            errorMessage={errors?.lastName?.message}
          />
          <TextField
            label="Telefon"
            placeholder="+38612345678"
            name="telephone"
            type="number"
            register={register}
          />
          <div className={style.btnDiv}>
            <Button
              title="Nadgradnja"
              type="submit"
              className={style.btn}
              isLoading={isLoading}
            />
            <Button
              title="Spremeni geslo"
              icon={refresh}
              type="button"
              className={style.btn}
              handleClick={() => setOpen(true)}
            />
          </div>
        </form>
      </Card>

      {open && <ChangePassword open={open} setOpen={setOpen} />}
    </>
  );
};

export default ProfileCard;

const signUpSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("First Name is required")
    .min(3, "Minimum 3 characters are required"),
  lastName: yup
    .string()
    .required("Last Name is required")
    .min(3, "Minimum 3 characters are required"),
  email: yup
    .string()
    .required("Email is required")
    .email("invalid email address"),
});
