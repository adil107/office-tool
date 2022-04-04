import React from "react";

import { NavDropdown } from "components/nav-dropdown";
import Button from "components/button";

import style from "./select-search-debtor.module.scss";
import downIcon from "assets/icons/arrow down-blue.svg";
import plusIcon from "assets/icons/Plus-icon.svg";
import TextField from "components/text-field";

const DebtorSearch = ({
  className,
  optionList,
  open,
  setOpen,
  selectVal,
  setSelectVal,
  optionClassName,
  buttonClassName,
  buttonText,
  label,
  handleButtonClick,
}) => {
  return (
    <div className={`${style.wrapper} ${className}`}>
      {label && <label className={style.label}>{label}</label>}

      <div className={style.selectDiv}>
        <div>
          <p className={style.select_p}>{selectVal?.length ? selectVal : ""}</p>
          <div className={style.majesto}>
            <p className={style.majestoLabel}>Naslov 123</p>
            <p className={style.majestoLabel}>Mesto</p>
          </div>
        </div>
        <img src={downIcon} alt="" onClick={() => setOpen && setOpen(!open)} />
      </div>
      {open && (
        <div className={style.dropdownWrapperDiv}>
          <div className={style.buttonSearchMainDiv}>
            <div className={style.buttonSearchDiv}>
              <Button
                icon={plusIcon}
                title={buttonText || "Dodaj stranko"}
                className={`${style.button} ${buttonClassName}`}
                handleClick={handleButtonClick && handleButtonClick}
              />
              <TextField
                className={style.TextField}
                placeholder="Search client by name"
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

export default DebtorSearch;
