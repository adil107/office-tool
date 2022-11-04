import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import md5 from "md5";

import Card from "components/card";
import TextField from "components/text-field";
import Button from "components/button";
import axios from "utils/axios";
import { login } from "utils/endpoints";
import { createNotification } from "common/create-notification";
import { authAction } from "redux/actions";
import removeKey from "utils/helper";
import { loginSchema } from "./helper";

import style from "./login.module.scss";
import logo from "assets/images/logo.svg";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "all",
    resolver: yupResolver(loginSchema),
  });

  const formSubmit = async (data) => {
    const tempData = {
      token: "demo",
      email: data?.email,
      password:
        data?.email !== "demo@bignest.com"
          ? md5(data?.password)
          : data?.password,
    };
    setIsLoading(true);
    try {
      const res = await axios.post(login, tempData);
      if (res.data?.error === 0) {
        const user = res.data;
        const tempUserInfo = removeKey(user?.userInfo, "userToken");

        dispatch(
          authAction(user?.userInfo?.userToken, {
            userInfo: tempUserInfo,
            selectedCompanyData: user?.selectedCompanyData,
          })
        );
      } else {
        createNotification("error", "Error", res.data?.msg);
      }
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className={style.login}>
        <div className={style.main}>
          <div className={style.img}>
            <img src={logo} alt="" />
          </div>
          <form onSubmit={handleSubmit(formSubmit)} autoComplete="off">
            <Card className={style.card}>
              <p>Login</p>
              <div className={style.textField}>
                <TextField
                  type="text"
                  label="Email"
                  placeholder="ziga.muller@gmail.com"
                  name="email"
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
              <p className={style.account}>Don’t have an account.</p>

              <Link to="/register">
                <p className={style.create} style={{ cursor: "pointer" }}>
                  Create an account.
                </p>
              </Link>

              <div className={style.flex}>
                <Button
                  type={"submit"}
                  title="Login"
                  className={style.btn}
                  isLoading={isLoading}
                />
              </div>
            </Card>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
