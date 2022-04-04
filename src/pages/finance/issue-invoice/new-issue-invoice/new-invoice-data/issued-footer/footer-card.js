import React, { useState } from "react";

import Card from "components/card";

import style from "./issued-footer.module.scss";
import Checkbox from "components/checkbox";
import Select from "components/select";

const FooterCard = () => {
  const [open, setOpen] = useState(false);
  const [select, setSelect] = useState("Izbrani sta 2 postavki");

  return (
    <>
      <Card className={style.innerCard}>
        <div className={style.leftDiv}>
          <p className={style.cena}>Cena brez DDV</p>
          <p className={style.cena}>Skupaj DDV</p>
          <p className={style.cena}>Skupaj z DDV</p>
          <div className={style.cena} style={{ justifyContent: "flex-end" }}>
            <Checkbox styleClass={{ justifyContent: "flex-end" }} />
          </div>
          <p className={style.cena}>Izbrani avansni računi</p>
          <p className={style.innerEnd}>ZA PLAČILO</p>
        </div>
        <div className={style.rightDiv}>
          <p className={style.rightCena}>400,00</p>
          <p className={style.rightCena}>88,00</p>
          <p className={style.rightCena}>488,00</p>
          <p
            className={style.rightCena}
            style={{ color: "#7E858D", fontSize: "14px" }}
          >
            Zapiraj po avansnem računu
          </p>
          <Select
            optionList={options}
            open={open}
            selectVal={select}
            setSelectVal={setSelect}
            setOpen={setOpen}
            marginClass={style.marginClass}
          />
          <p className={style.innerEnd} style={{ textAlign: "left" }}>
            100,00
          </p>
        </div>
      </Card>
    </>
  );
};

export default FooterCard;

const options = [
  {
    id: 1,
    shortName: "Izbrani sta 2 postavki",
    element: <Checkbox />,
  },
  { id: 2, shortName: "105 - 2021", element: <Checkbox /> },
  { id: 2, shortName: "107 - 2022", element: <Checkbox /> },
  { id: 2, shortName: "110 - 2022", element: <Checkbox /> },
  { id: 2, shortName: "113 - 2022", element: <Checkbox /> },
];
