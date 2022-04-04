import React from "react";
import style from "./radio.module.scss";

const Radio = ({ label, name, handleChange, value, checked }) => {
  return (
    <>
      <label className={style.container}>
        {label && <span className={style.radioLabel}>{label} </span>}
        <input
          type="radio"
          name={name}
          value={value}
          // onClick={handleChange && handleChange}
          onChange={handleChange && handleChange}
          checked={checked === value}
        />
        <span className={style.checkMark}></span>
      </label>
    </>
  );
};

export default Radio;
