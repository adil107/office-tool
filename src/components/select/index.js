import React from "react";

import style from "./select.module.scss";
import downIcon from "assets/icons/arrow down-blue.svg";
import { NavDropdown } from "components/nav-dropdown";

const Select = ({
  className,
  optionList,
  open,
  setOpen,
  selectVal,
  setSelectVal,
  optionClassName,
  inputClass,
  marginClass,
  label,
}) => {
  return (
    <div className={`${style.wrapper} ${className}`}>
      {label && <label className={style.label}>{label}</label>}
      <div className={`${style.selectDiv} ${inputClass}`}>
        <p className={style.select_p}>
          {selectVal?.length ? selectVal : "select option"}
        </p>
        <img src={downIcon} alt="" onClick={() => setOpen && setOpen(!open)} />
      </div>

      <div className={style.dropdownWrapperDiv}>
        {open && (
          <NavDropdown
            dropdownList={optionList}
            open={open}
            active={selectVal}
            setActive={setSelectVal}
            setOpen={setOpen}
            className={optionClassName}
            marginClass={marginClass}
          />
        )}
      </div>
    </div>
  );
};

export default Select;
