import React from "react";

import ReportCard from "components/report-title";

import style from "./home.module.scss";
import green from "assets/images/Group.svg";
import greenUp from "assets/images/outcome.svg";
import redIcon from "assets/icons/red-report-icon.svg";

const MonthsCard = ({ data, receivedInvoice }) => {
  return (
    <>
      <div className={style.main}>
        <div className={style.currentFlex}>
          <h6>Current month</h6>

          <p>Marec 2021</p>
        </div>
        <div className={style.mixin}>
          <ReportCard
            title={"Issued invoices"}
            amount={data?.totalIssued}
            arrowIcon={green}
          />
          <ReportCard
            title="Received invoices"
            amount={receivedInvoice}
            arrowIcon={redIcon}
            body="Some invoices are still being processed..."
          />
          <ReportCard
            title={"Current profit"}
            amount={Number(data?.totalIssued) - Number(receivedInvoice)}
            arrowIcon={greenUp}
          />
        </div>
      </div>
    </>
  );
};

export default MonthsCard;
