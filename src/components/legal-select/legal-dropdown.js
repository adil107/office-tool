import React, { Fragment } from "react";

import Card from "components/card";

import style from "./legal.module.scss";
import Checkbox from "components/checkbox";

export const LegalDropdown = ({
  options,
  open,
  setOpen,

  className,
}) => {
  return (
    open && (
      <>
        <div
          onClick={() => setOpen && setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
          }}
        ></div>

        <Card className={`${style.card} ${className && className}`}>
          {options.map((ele, index) => (
            <Fragment key={index}>
              <div className={style.firstFlex}>
                <p>{ele.title}</p>
                <Checkbox />
              </div>
              <p>{ele.paragraph}</p>
            </Fragment>
          ))}
        </Card>
      </>
    )
  );
};
