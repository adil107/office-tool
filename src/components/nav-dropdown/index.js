import React, { useEffect, useState } from "react";

import Card from "components/card";

import style from "./nav.module.scss";

export const NavDropdown = ({
  dropdownList,
  open,
  setOpen,
  active,
  setActive,
  className,
  handleClick,
  marginClass,
}) => {
  const [myCompaniesList, setMyCompaniesList] = useState([]);

  useEffect(() => {
    const handleCompanyList = () => {
      const tempList = [];
      const tempData = { ...dropdownList };
      for (let key in tempData) {
        tempList.push(tempData[key]);
      }
      setMyCompaniesList([...tempList]);
    };
    if (Object.keys(dropdownList)?.length) handleCompanyList();
  }, [dropdownList]);

  return (
    open && (
      <>
        <div
          onClick={() => setOpen && setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            width: "100%",
          }}
        ></div>

        <Card className={`${style.card} ${className && className}`}>
          {myCompaniesList?.length > 0 &&
            myCompaniesList?.map((ele) => (
              <div
                key={ele?.id}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: "10px",
                }}
                className={marginClass}
              >
                <p
                  onClick={() => {
                    handleClick && handleClick(ele.id);
                    setActive && setActive(ele?.shortName);
                    setActive && setOpen(false);
                  }}
                  className={style.inActive}
                  style={{
                    color: active === ele?.shortName ? "#0d3b6b" : "",
                    fontWeight: active === ele?.shortName ? "700" : "",
                  }}
                >
                  {ele?.shortName}
                </p>
                {ele?.element && <div>{ele?.element}</div>}
              </div>
            ))}
        </Card>
      </>
    )
  );
};
