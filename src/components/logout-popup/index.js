import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import Modal from "components/modal";
import Button from "components/button";
import { logoutUser } from "redux/actions";

import style from "./logout-popup.module.scss";

const LogoutPopup = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate("/login");
    handleClose();
  };

  return (
    <Modal open={open} handleClose={handleClose} className={style.logoutModal}>
      <div className={style.contentWrapper}>
        <h1 className={style.title}>Are you sure you want to logout?</h1>

        <div className={style.btnDiv}>
          <Button
            className={style.btn1}
            title="Yes"
            handleClick={handleLogout}
          />
          <Button
            className={style.btn1}
            title="No, get me back"
            handleClick={handleClose}
          />
        </div>
      </div>
    </Modal>
  );
};

export default LogoutPopup;
