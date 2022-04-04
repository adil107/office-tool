import React, { useState } from "react";

import Button from "components/button";
import Checkbox from "components/checkbox";
import Select from "components/select";
import FooterCard from "./footer-card";

import style from "./issued-footer.module.scss";
import add from "assets/legal_financial/add-gray.svg";
import help from "assets/legal_financial/help-gray.svg";
import LegalSelect from "components/legal-select";

const IssuedFooter = ({ indexingArr, setIndexingArr }) => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [openLegal, setOpenLegal] = useState(false);

  const [select, setSelect] = useState("Izberi postavke");
  const [select1, setSelect1] = useState("V primeru zamude si pridržu...");

  const handleClick = () => {
    if (indexingArr?.length < 5) {
      const temp = JSON.parse(JSON.stringify([...indexingArr]));
      temp.push({
        service: "Storitev B",
        amount: "1",
        price: "100,00",
        vat: "22%",
        vatur: "22,00",
        amountVatur: "122,00",
      });
      setIndexingArr([...temp]);
    }
  };
  return (
    <>
      <div className={style.billIndexing}>
        <div className={style.grid}>
          <div>
            <Button
              title="Dodaj postavko"
              icon={add}
              className={style.btn}
              handleClick={handleClick}
            />
            <div className={style.divFlex}>
              <p className={style.izrandu}>Obrnjena davčna stopnja</p>
              <div style={{ marginRight: "25px" }}>
                <Checkbox defaultChecked />
              </div>
              <div style={{ width: "275px" }}>
                <Select
                  optionList={options}
                  open={open}
                  selectVal={select}
                  setSelectVal={setSelect}
                  marginClass={style.marginClass}
                  setOpen={setOpen}
                />
              </div>
            </div>
            <div className={style.divFlex}>
              <p className={style.izrandu} style={{ marginRight: "31px" }}>
                Pravno obvestilo
              </p>

              <div style={{ width: "386px" }}>
                <Select
                  optionList={options2nd}
                  open={open1}
                  selectVal={select1}
                  setSelectVal={setSelect1}
                  marginClass={style.marginClass}
                  setOpen={setOpen1}
                />
              </div>
            </div>
            <div className={style.divFlex}>
              <p className={style.izrandu}>Davčno obvestilo</p>

              <div style={{ width: "386px" }}>
                <LegalSelect
                  optionList={optionList}
                  open={openLegal}
                  marginClass={style.marginClass}
                  setOpen={setOpenLegal}
                />
                <p className={style.helpGray}>
                  <img src={help} alt="" />
                  Na voljo je več davčnih obvestil. Izberite pravo!
                </p>
              </div>
            </div>
          </div>
          <FooterCard />
        </div>

        <div className={style.footerDiv}>
          <p className={style.lastFooter}>
            Osnovni podatki podjetja, ki morajo biti na računu - to je za
            pdf/logiko
          </p>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Button title="Izdaj račun" className={style.btn1} />
            <Button title="Izbriši račun" className={style.button} />
          </div>
        </div>
      </div>
    </>
  );
};

export default IssuedFooter;

const options = [
  { id: 1, shortName: "1. Storitev X", element: <Checkbox /> },
  { id: 2, shortName: "Izberi postavke", element: <Checkbox /> },

  { id: 3, shortName: "2. Storitev Y", element: <Checkbox /> },
  { id: 4, shortName: "3. Stroitev Z", element: <Checkbox /> },
  { id: 5, shortName: "4. Storitev A", element: <Checkbox /> },
];

const options2nd = [{ id: 1, shortName: "V primeru zamude si pridržu..." }];

const optionList = [
  {
    title: "Legal notice 1",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sed sagittis non eu, ac amet in gravida. Mauris est nunc et cursus morbi mattis id ut.",
  },
  {
    title: "Legal notice 2",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget sed sagittis non eu, ac amet in gravida. Mauris est nunc et cursus morbi mattis id ut.",
  },
];
