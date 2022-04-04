import Radio from "components/radio-button";
import React from "react";

import style from "./basic-advance.module.scss";

const BasicAdvanceRadio = ({ setOpen, handleChecked, className, checked }) => {
  return (
    <>
      <div
        className={style.overlay}
        onClick={() => {
          setOpen && setOpen(false);
        }}
      ></div>
      <div className={`${style.wrapper} ${className}`}>
        <div className={style.contentDiv}>
          <Radio
            label={"Basic"}
            name="bat"
            value="Basic"
            handleChange={handleChecked}
            checked={checked}
          />
        </div>
        <div className={style.contentDiv} style={{ marginTop: "10px" }}>
          <Radio
            label={"Advance"}
            name="bat"
            value="Advance"
            handleChange={handleChecked}
            checked={checked}
          />
        </div>
      </div>
    </>
  );
};

export default BasicAdvanceRadio;
