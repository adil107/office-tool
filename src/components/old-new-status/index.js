import React from "react";

import Card from "components/card";

import style from "./old-new.module.scss";

const OldNewStatus = ({ rows }) => {
  return (
    <Card className={style.wrapper}>
      <div className={style.cardHeader}>
        <div className={style.headerContent} style={{ flexBasis: "280px" }}>
          <p className={style.p} style={{ fontSize: "18px", fontWeight: 700 }}>
            Vse spremembe
          </p>
        </div>

        <div className={style.headerContent} style={{ flexBasis: "557px" }}>
          <p className={style.p}>Old status</p>
        </div>

        <div className={style.headerContent} style={{ flexBasis: "517px" }}>
          <p className={style.p} style={{ paddingLeft: "23px" }}>
            New status
          </p>
        </div>
      </div>
      <div>
        {/* Body */}
        {rows?.map((ele, index) => (
          <div className={style.cardBody} key={index}>
            <div className={style.bodyContent} style={{ flexBasis: "280px" }}>
              <p className={style.p}>{ele.name}</p>
            </div>

            <div className={style.bodyContent} style={{ flexBasis: "557px" }}>
              <p className={style.p}>{ele.oldStatus}</p>
            </div>

            <div className={style.bodyContent} style={{ flexBasis: "517px" }}>
              <p
                className={style.p}
                style={{
                  paddingLeft: "23px",
                  color: ele.status === true ? "#0D3B6B" : "",
                  fontWeight: ele.status === true ? 700 : 400,
                }}
              >
                {ele.newStatus}
              </p>
              {ele.status && <div className={style.roundDiv}></div>}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default OldNewStatus;
