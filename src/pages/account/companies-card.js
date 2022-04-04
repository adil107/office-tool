import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Card from "components/card";
import style from "./account.module.scss";
import Button from "components/button";

import add from "assets/legal_financial/add.svg";
import deleteIcon from "assets/legal_financial/delete.svg";
import AddCompanyModal from "./add-company-modal";

const CompaniesCard = () => {
  const [open, setOpen] = useState(false);
  const [myCompaniesList, setMyCompaniesList] = useState([]);

  const { myCompanyList } = useSelector((state) => state.auth);

  useEffect(() => {
    const handleCompanyList = () => {
      const tempList = [];
      const tempData = { ...myCompanyList };
      for (let key in tempData) {
        tempList.push(tempData[key]);
      }
      setMyCompaniesList([...tempList]);
    };
    if (Object.keys(myCompanyList)?.length) handleCompanyList();
  }, [myCompanyList]);

  return (
    <>
      <Card className={style.card}>
        <div className={style.flex}>
          <h6 className={style.companyProfile}>My companies</h6>
          <Button
            title="Dodaj svoje podjetje"
            icon={add}
            className={style.btn}
            handleClick={() => setOpen(true)}
          />
        </div>
        <div style={{ marginTop: "30px" }}>
          {myCompaniesList?.map((ele) => (
            <div
              className={style.flex}
              style={{ marginTop: "20px" }}
              key={ele?.id}
            >
              <p className={style.title}>{ele.shortName}</p>
              <img src={deleteIcon} alt="" className={style.delIcon} />
            </div>
          ))}
        </div>
      </Card>
      {open && <AddCompanyModal open={open} setOpen={setOpen} />}
    </>
  );
};

export default CompaniesCard;
