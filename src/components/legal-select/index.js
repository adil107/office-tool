import React from "react";

import style from "./legal.module.scss";
import downIcon from "assets/icons/arrow down-blue.svg";
import { LegalDropdown } from "./legal-dropdown";

const LegalSelect = ({
  className,
  optionList,
  open,
  setOpen,

  optionClassName,
  inputClass,
  label,
}) => {
  return (
    <div className={`${style.wrapper} ${className}`}>
      {label && <label className={style.label}>{label}</label>}
      <div className={`${style.selectDiv} ${inputClass}`}>
        <p className={style.select_p}>DDV je obračunan po 134. čl...</p>
        <img src={downIcon} alt="" onClick={() => setOpen && setOpen(!open)} />
      </div>

      <div className={style.dropdownWrapperDiv}>
        {open && (
          <LegalDropdown
            options={optionList}
            open={open}
            setOpen={setOpen}
            className={optionClassName}
          />
        )}
      </div>
    </div>
  );
};

export default LegalSelect;
