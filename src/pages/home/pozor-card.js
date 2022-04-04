import React, { useState } from "react";

import Card from "components/card";

import style from "./home.module.scss";
import cross from "assets/images/cross.svg";
import help from "assets/images/help.svg";

const PozorCard = () => {
  const [show, setShow] = useState(true);
  return (
    <>
      {show && (
        <Card className={style.card}>
          <div className={style.flex}>
            <p className={style.pozar}>POZOR!</p>
            <img
              src={cross}
              alt=""
              className={style.cross}
              style={{ cursor: "pointer" }}
              onClick={() => setShow(false)}
            />
          </div>
          <div className={style.innerFlex}>
            <img src={help} alt="" className={style.img} />
            <p className={style.para}>
              Vaš račun je blokiran. (to je samo za info glede tvojih podjetji -
              nic drugega)
            </p>
          </div>
        </Card>
      )}
    </>
  );
};

export default PozorCard;
