import React from "react";

import { NavDropdown } from "components/nav-dropdown";
import Button from "components/button";

import style from "./select-search.module.scss";
import downIcon from "assets/icons/arrow down-blue.svg";
import plusIcon from "assets/icons/Plus-icon.svg";
import TextField from "components/text-field";

const SelectWithSearch = ({
  className,
  optionList,
  open,
  setOpen,
  selectVal,
  setSelectVal,
  optionClassName,
  buttonClassName,
  placeholder,
  buttonText,
  label,
  handleButtonClick,
}) => {
  return (
    <div className={`${style.wrapper} ${className}`}>
      {label && <label className={style.label}>{label}</label>}
      <div className={style.selectDiv}>
        <p className={style.select_p}>{selectVal?.length ? selectVal : ""}</p>
        <img src={downIcon} alt="" onClick={() => setOpen && setOpen(!open)} />
      </div>
      {open && (
        <div className={style.dropdownWrapperDiv}>
          <div className={style.buttonSearchMainDiv}>
            <div className={style.buttonSearchDiv}>
              {buttonText && (
                <Button
                  icon={plusIcon}
                  title={buttonText || "Dodaj stranko"}
                  className={`${style.button} ${buttonClassName}`}
                  handleClick={handleButtonClick && handleButtonClick}
                />
              )}
              <TextField
                className={style.TextField}
                placeholder={placeholder}
                styleField={{ marginLeft: buttonText ? "15px" : "0px" }}
              />
            </div>
          </div>

          <NavDropdown
            dropdownList={optionList}
            open={open}
            active={selectVal}
            setActive={setSelectVal}
            setOpen={setOpen}
            className={`${style.optionClassName} ${optionClassName}`}
          />
        </div>
      )}
    </div>
  );
};

export default SelectWithSearch;
