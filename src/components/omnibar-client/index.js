import React from "react";

import Card from "components/card";

import style from "./omnibar-client.module.scss";

export const OmnibarClient = ({ data }) => {
  return (
    <Card className={style.cardWrapper}>
      <div className={style.cardContentWrapper}>
        <div className={style.div} style={{ flexBasis: "153px" }}>
          <p className={style.p}>Last change</p>
          <div className={style.contentDiv}>
            <p>15.2.2022</p>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "320px" }}>
          <p className={style.p}>Client</p>
          <div className={style.contentDiv} style={{ width: "320px" }}>
            <p style={{ fontWeight: "bold" }}>
              {data?.shortName || "DM Transport Milorad TOMić s.p."}
            </p>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "198px" }}>
          <p className={style.p}>Exposure</p>
          <div className={style.contentDiv}>
            <p style={{ fontWeight: "bold" }}>10.000,00 €</p>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "360px" }}>
          <p className={style.p}>No. of opened invoices</p>
          <div className={style.contentDiv} style={{ display: "flex" }}>
            <p style={{ fontWeight: "bold" }}>3</p>
            <div
              style={{ display: "flex", color: "#7E858D", marginLeft: "12px" }}
            >
              ({" "}
              {dateArr?.map((ele, index) => (
                <p
                  key={index}
                  style={{
                    color: "#7E858D",
                    padding: "0 2px",
                    marginTop: "1px",
                  }}
                >
                  {ele}
                  {index < dateArr.length - 1 ? "," : ""}
                </p>
              ))}
              )
            </div>
          </div>
        </div>

        <div className={style.contentParentDiv}></div>
      </div>
    </Card>
  );
};

const dateArr = ["1-2021", "2-2021", "3-2021"];
