import React, { Fragment, useContext } from "react";

import Card from "components/card";
import Checkbox from "components/checkbox";
import Button from "components/button";
import { FinanceContext } from "finance-client-context";

import style from "./omnibar-selected.module.scss";

const OmnibarSelected = ({ text, btnList }) => {
  const { handleOmnibarSelectedChange, omnibarSelectedCheckbox } =
    useContext(FinanceContext);

  return (
    <Card className={style.cardWrapper}>
      <div className={style.contentWrapper}>
        <div className={style.contentDiv}>
          <Checkbox
            checked={omnibarSelectedCheckbox}
            handleChange={handleOmnibarSelectedChange}
          />
        </div>
        <div className={style.btnTextDiv}>
          <div className={style.btnDiv}>
            {btnList?.map((ele, index) => (
              <Fragment key={index}>
                <Button
                  title={ele?.text}
                  icon={ele?.icon}
                  className={style.btn}
                />
              </Fragment>
            ))}
          </div>
          <p>{text || "No. of selected items: 2"}</p>
        </div>
      </div>
    </Card>
  );
};

export default OmnibarSelected;
