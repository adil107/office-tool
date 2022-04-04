/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Card from "components/card";
import style from "./sidebar.module.scss";
import { NavDropdown } from "components/nav-dropdown";
import LogoutPopup from "components/logout-popup";
import axios from "utils/axios";
import { select_company } from "utils/endpoints";
import { selectedCompany } from "redux/actions";
import { createNotification } from "common/create-notification";

import roundArrowImg from "assets/icons/round-arrow.svg";
import homeImg from "assets/icons/home.svg";
import homeBlueImg from "assets/icons/home-blue.svg";
import clientImg from "assets/icons/clients.svg";
import clientBlueImg from "assets/icons/clients-blue.svg";
import financeImg from "assets/icons/finance.svg";
import financeBlueImg from "assets/icons/finance-blue.svg";
import documentsImg from "assets/icons/documents.svg";
import documentsBlueImg from "assets/icons/documents-blue.svg";
import legalHelpImg from "assets/icons/legal-help.svg";
import legalBlueImg from "assets/icons/legal-help-blue.svg";
import financialHelpImg from "assets/icons/financial-help.svg";
import financialBlueImg from "assets/icons/financial-help-blue.svg";
import accountImg from "assets/icons/settings.svg";
import accountBlueImg from "assets/icons/settings-blue.svg";
import logoutImg from "assets/icons/logout.svg";
import bignestImg from "assets/icons/bignest-logo.svg";

const Sidebar = () => {
  const [financeOpen, setFinanceOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [logoutPopupOpen, setLogoutPopupOpen] = useState(false);
  const [active, setActive] = useState();

  const { pathname } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userData, myCompanyList, token } = useSelector((state) => state.auth);

  const handleNavigate = (route) => {
    navigate(route);
  };

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

  useEffect(() => {
    if (!pathname.includes("finance") && financeOpen) {
      setFinanceOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <Card className={style.sidebarCard}>
        <div className={style.titleDiv}>
          <h1>{userData?.selectedCompanyData?.shortName || "Ni Najdeno"}</h1>
          <div className={style.roundArrowImgDiv}>
            {Object.keys(myCompanyList)?.length > 0 && (
              <img src={roundArrowImg} alt="" onClick={() => setOpen(!open)} />
            )}
          </div>
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

        <ul className={style.sideUl1}>
          <div>
            <li
              className={pathname === "/" ? style.active : ""}
              onClick={() => handleNavigate("/")}
            >
              <div>
                <img src={pathname === "/" ? homeBlueImg : homeImg} alt="" />
                <p>Home</p>
              </div>
            </li>

            <li
              className={pathname.includes("client") ? style.active : ""}
              onClick={() => handleNavigate("/my-client")}
            >
              <div>
                <img
                  src={pathname.includes("client") ? clientBlueImg : clientImg}
                  alt=""
                />
                <p>My clients</p>
              </div>
            </li>

            <li>
              <div>
                <img
                  src={
                    pathname.includes("finance") ? financeBlueImg : financeImg
                  }
                  alt=""
                />
                <p>Finance</p>
                <div
                  className={style.financeRoundImgDiv}
                  onClick={() => {
                    setFinanceOpen((prev) => !prev);
                    handleNavigate("/finance-issue-invoice");
                  }}
                >
                  <img
                    src={roundArrowImg}
                    alt=""
                    style={{
                      transform: financeOpen
                        ? "rotate(180deg)"
                        : "rotate(0deg)",
                    }}
                  />
                </div>
              </div>

              {/* nested Drop down */}
              <ul
                className={style.financeUl2}
                style={{ display: financeOpen ? "block" : "none" }}
              >
                <div
                  style={{ border: "0.5px solid #e5e7e8", marginRight: "25px" }}
                />
                <li
                  className={pathname.includes("issue") ? style.active : ""}
                  onClick={() => handleNavigate("/finance-issue-invoice")}
                >
                  <div>
                    <p>Issued invoices</p>
                  </div>
                </li>

                <li
                  className={pathname.includes("receive") ? style.active : ""}
                  onClick={() => handleNavigate("/finance-receive-invoice")}
                >
                  <div>
                    <p>Received invoices</p>
                  </div>
                </li>

                <li
                  className={pathname.includes("proforma") ? style.active : ""}
                  onClick={() => handleNavigate("/finance-proforma")}
                >
                  <div>
                    <p>Proforma</p>
                  </div>
                </li>
                <div
                  style={{ border: "1px solid #e5e7e8", marginRight: "25px" }}
                />
              </ul>
            </li>

            <li
              className={pathname.includes("documents") ? style.active : ""}
              onClick={() => handleNavigate("/documents")}
            >
              <div>
                <img
                  src={
                    pathname.includes("documents")
                      ? documentsBlueImg
                      : documentsImg
                  }
                  alt=""
                />
                <p>Doc templates</p>
              </div>
            </li>

            <li
              className={pathname.includes("legal") ? style.active : ""}
              onClick={() => handleNavigate("/legal-help")}
            >
              <div>
                <img
                  src={pathname.includes("legal") ? legalBlueImg : legalHelpImg}
                  alt=""
                />
                <p>Legal help</p>
              </div>
            </li>

            <li
              className={pathname.includes("financial") ? style.active : ""}
              onClick={() => handleNavigate("/financial-help")}
            >
              <div>
                <img
                  src={
                    pathname.includes("financial")
                      ? financialBlueImg
                      : financialHelpImg
                  }
                  alt=""
                />
                <p>Financial help</p>
              </div>
            </li>
          </div>

          <div className={style.sidebarFooterDiv}>
            <div style={{ marginBottom: "50px" }}>
              <li
                className={pathname.includes("account") ? style.active : ""}
                onClick={() => handleNavigate("/account")}
              >
                <div>
                  <img
                    src={
                      pathname.includes("account") ? accountBlueImg : accountImg
                    }
                    alt=""
                  />
                  <p>Account</p>
                </div>
              </li>

              <li onClick={() => setLogoutPopupOpen(true)}>
                <div>
                  <img src={logoutImg} alt="" />
                  <p>Log out</p>
                </div>
              </li>
            </div>
            <div className={style.bignestLogo}>
              <img src={bignestImg} alt="" />
            </div>
          </div>
        </ul>
      </Card>
      <LogoutPopup open={logoutPopupOpen} setOpen={setLogoutPopupOpen} />
    </>
  );
};

export default Sidebar;
