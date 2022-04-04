import React from "react";
import style from "./report-card.module.scss";
import helpIcon from "assets/images/Group 274.svg";

const ReportCard = ({ title, amount, arrowIcon, body }) => {
  return (
    <div
      className={style.card}
      style={{
        backgroundColor: title === "Current profit" ? "#00C67E" : "#fff",
      }}
    >
      <div className={style.reportCard}>
        <div className={style.mainFlex}>
          <div>
            <h6 style={{ color: title === "Current profit" ? "#fff" : "" }}>
              {title}
            </h6>
            <div className={style.flex}>
              <h5
                style={{
                  color:
                    title === "Issued invoices"
                      ? "#00C67E"
                      : title === "Current profit"
                      ? "#fff"
                      : "#DF2244",
                }}
              >
                {amount ? Number(amount)?.toLocaleString() : 0} €
              </h5>
              {title === "Received invoices" && (
                <img src={helpIcon} alt="" className={style.helpIcon} />
              )}
            </div>
          </div>
          {arrowIcon && (
            <img src={arrowIcon} alt="" className={style.arrowIcon} />
          )}
        </div>
        {body && <p>{body}</p>}
      </div>
    </div>
  );
};
export default ReportCard;
