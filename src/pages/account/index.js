import React from "react";

import { Navbar } from "components/layout/navbar";
import CompaniesCard from "./companies-card";
import ProfileCard from "./profile-card";

import style from "./account.module.scss";

const Account = () => {
  return (
    <>
      <Navbar title="Account" />

      <div className={style.account}>
        <ProfileCard />
        <div className={style.company}></div>
        <CompaniesCard />
      </div>
    </>
  );
};

export default Account;
