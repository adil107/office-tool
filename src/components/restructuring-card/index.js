import React from "react";

import style from "./restructing.module.scss";

import Card from "components/card";

import Button from "components/button";

export const RestructuringCard = ({
  btnTitle,
  headingTitle,
  paragraph,
  priceAmount,
  icon,
  btnIcon,
  handleBtnClick,
  isLoading,
  disabled,
}) => {
  return (
    <>
      <Card className={style.card}>
        <div className={style.cardHead}>
          {icon && <img src={icon} alt="" className={style.icon} />}
          <h6 className={style.title}>
            {headingTitle || "Company restructuring"}
          </h6>
        </div>

        <p className={style.para}>{paragraph}</p>

        <div className={style.cardFooter}>
          <div>
            {priceAmount && (
              <p className={style.para} style={{ margin: "0px" }}>
                Expected price
              </p>
            )}
            {priceAmount && <h6 className={style.title}>{priceAmount}</h6>}
          </div>
          <Button
            title={btnTitle || "Request a call back"}
            icon={btnIcon}
            className={style.btn}
            handleClick={handleBtnClick && handleBtnClick}
            isLoading={isLoading}
          />
        </div>
      </Card>
    </>
  );
};
