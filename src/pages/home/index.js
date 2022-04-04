import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import HomeChart from "components/chart";
import MonthsCard from "./months-card";
import PozorCard from "./pozor-card";
import { Navbar } from "components/layout/navbar";
import axios from "utils/axios";
import { financial_analytics } from "utils/endpoints";
import moment from "moment";
import { handleSumFun } from "utils/helper";

const HomePage = () => {
  const [xAxisData, setXaxisData] = useState([]);
  const [issuedPerMonth, setIssuedPerMonth] = useState([]);
  const [vatPerMonth, setVatPerMonth] = useState([]);
  const [receivedInvoice, setReceivedInvoice] = useState(0);
  const [data, setData] = useState({});

  const { token, userData } = useSelector((state) => state.auth);

  const handleConvertMonth = (dateArr) => {
    let temp = [...dateArr];
    temp = temp.map(
      (ele, index) => (temp[index] = moment(ele)?.format("MMMM"))
    );
    setXaxisData([...temp]);
  };

  useEffect(() => {
    const handleFetchData = async () => {
      const res = await axios.post(financial_analytics, {
        token: "demo",
        userToken: token,
      });

      if (res?.data?.error === 0) {
        const data = res?.data?.analytics;
        setData({ ...data });
        handleConvertMonth([...Object.keys(data?.issuedPerMonth)]);
        setIssuedPerMonth([...Object.values(data?.issuedPerMonth)]);
        setVatPerMonth([...Object.values(data?.vatPerMonth)]);
        const vatPerMonthSum = handleSumFun(Object.values(data?.vatPerMonth));
        setReceivedInvoice(vatPerMonthSum);
      }
    };
    token && handleFetchData();
  }, [token, userData]);
  return (
    <div
      style={{
        height: "calc(100vh - 40px)",
        overflowY: "auto",
        padding: "0 8px 0 4px",
      }}
    >
      <Navbar title="Hello, Matej!" />
      <div style={{ paddingBottom: "50px" }}>
        <PozorCard />
        <MonthsCard data={data} receivedInvoice={receivedInvoice} />
        <HomeChart
          categoriesXaxis={xAxisData}
          issuedPerMonth={issuedPerMonth}
          vatPerMonth={vatPerMonth}
          data={data}
          receivedInvoice={receivedInvoice}
        />
      </div>
    </div>
  );
};

export default HomePage;
