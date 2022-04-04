import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import md5 from "md5";
import { Link, useNavigate } from "react-router-dom";

import Card from "components/card";
import TextField from "components/text-field";
import Button from "components/button";
import { signup } from "utils/endpoints";
import axios from "utils/axios";

import style from "./signUp.module.scss";
import logo from "assets/images/logo.svg";
import { createNotification } from "common/create-notification";

const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(signUpSchema),
  });

  const formSubmit = async (data) => {
    const tempData = {
      token: "demo",
      email: data?.email,
      password: md5(data?.password),
      firstName: data?.firstName,
      lastName: data?.lastName,
    };
    setIsLoading(true);
    try {
      const res = await axios.post(signup, tempData);
      if (res.data?.error === 0) {
        createNotification("success", "Success", res?.data?.msg);
        navigate("/login");
      } else {
        createNotification("error", "Error", res?.data?.msg);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={style.signUp}>
        <div className={style.main}>
          <div className={style.img}>
            <img src={logo} alt="" />
          </div>
          <form onSubmit={handleSubmit(formSubmit)}>
            <Card className={style.card}>
              <p>Registration</p>

              <div className={style.textField}>
                <TextField
                  type="text"
                  name="firstName"
                  label="First Name"
                  placeholder="john"
                  register={register}
                  errorMessage={errors?.firstName?.message}
                />
              </div>
              <div className={style.textField}>
                <TextField
                  type="text"
                  name="lastName"
                  label="Last Name"
                  placeholder="doe"
                  register={register}
                  errorMessage={errors?.lastName?.message}
                />
              </div>

              <div className={style.textField}>
                <TextField
                  type="text"
                  name="email"
                  label="Email"
                  placeholder="example@gmail.com"
                  register={register}
                  errorMessage={errors?.email?.message}
                />
              </div>
              <div className={style.textField}>
                <TextField
                  type="password"
                  label="Password"
                  placeholder="******"
                  name="password"
                  register={register}
                  errorMessage={errors?.password?.message}
                />
              </div>
              <div className={style.textField}>
                <TextField
                  type="password"
                  label="Repeat Password"
                  placeholder="*******"
                  name="repeatPassword"
                  register={register}
                  errorMessage={errors?.repeatPassword?.message}
                />
              </div>
              <div className={style.flex}>
                <Button
                  title="Register"
                  type="submit"
                  className={style.btn}
                  isLoading={isLoading}
                />
                <Link to="/login">
                  <Button
                    title="Cancel"
                    type="button"
                    className={style.button}
                  />
                </Link>
              </div>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;

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
  password: yup
    .string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters"),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Repeat Password must match"),
});
