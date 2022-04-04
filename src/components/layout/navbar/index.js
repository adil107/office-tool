import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Button from "components/button";
import { NavDropdown } from "components/nav-dropdown";
import IssueInvoicePopup from "components/issue-invoice-popup";
import axios from "utils/axios";
import { select_company } from "utils/endpoints";
import { selectedCompany } from "redux/actions";
import { createNotification } from "common/create-notification";

import style from "./navbar.module.scss";
import addIcon from "assets/navbar/add-icon.svg";
import backArrowImg from "assets/navbar/navbar-back-arrow.svg";
import arrowDown from "assets/navbar/arrow-down.svg";
import bell from "assets/navbar/bell.svg";
import profile from "assets/navbar/profile.svg";
import { useDispatch, useSelector } from "react-redux";

export const Navbar = ({
  title,
  arrowIcon,
  backArrow,
  handleBack,
  subtitle,
}) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const [active, setActive] = useState();
  const [issueInvoicePopupOpen, setIssueInvoicePopupOpen] = useState(false);
  const navigate = useNavigate();

  const { userData, myCompanyList, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleClick = async (id) => {
    setOpen(false);
    const res = await axios.post(select_company, {
      userToken: token,
      token: "demo",
      companyId: id,
    });
    if (res?.data?.error === 0) {
      dispatch(selectedCompany(res?.data?.selectedCompanyData));
    } else {
      createNotification("error", "Error", res?.data?.msg);
    }
  };

  useEffect(() => {
    if (Object.keys(myCompanyList)?.length > 0) {
      setActive(userData?.selectedCompanyData?.shortName);
    }
  }, [myCompanyList, userData]);

  return (
    <>
      <div className={style.navbar}>
        <div className={style.flex}>
          {backArrow && (
            <img
              src={backArrowImg}
              alt=""
              style={{ marginRight: "26px", cursor: "pointer" }}
              onClick={handleBack && handleBack}
            />
          )}
          <h5>{title || "Izdani racuni"}</h5>
          {arrowIcon && (
            <img src={arrowIcon} alt="" className={style.arrowIcon} />
          )}
          {subtitle && <small className={style.small}>{subtitle}</small>}
        </div>
        <div className={style.flex1}>
          <Button
            title="Add"
            icon={addIcon}
            btn2={style.btn}
            handleClick={() => setIssueInvoicePopupOpen(true)}
          />
          <div className={style.bellIconDiv}>
            <img
              src={bell}
              alt=""
              className={style.arrowDown}
              onClick={() => navigate("/notification")}
            />
            <div
              className={style.bellNotification}
              style={{
                display: location.pathname === "/notification" && "none",
              }}
            >
              <p>12</p>
            </div>
          </div>
          <div className={style.flex}>
            <div>
              <h6 className={style.userName}>
                {userData?.userInfo?.firstName} {userData?.userInfo?.lastName}
              </h6>
              <p className={style.p}>Direktor</p>
            </div>
            <img src={profile} alt="" className={style.profileIcon} />
            {Object.keys(myCompanyList)?.length > 0 && (
              <img
                src={arrowDown}
                alt=""
                className={style.arrowDown}
                onClick={() => setOpen(true)}
              />
            )}

            {open && (
              <div className={style.dropDown}>
                <NavDropdown
                  open={open}
                  setOpen={setOpen}
                  active={active}
                  setActive={setActive}
                  dropdownList={myCompanyList}
                  handleClick={handleClick}
                />
              </div>
            )}
          </div>

          <IssueInvoicePopup
            open={issueInvoicePopupOpen}
            setOpen={setIssueInvoicePopupOpen}
          />
        </div>
      </div>
    </>
  );
};
