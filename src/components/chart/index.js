import React, { memo, useEffect, useState } from "react";

import Card from "components/card";
import ApexChart from "react-apexcharts";

import style from "./chart.module.scss";
import green from "assets/images/Group.svg";
import greenUp from "assets/images/green.svg";
import redIcon from "assets/icons/red-report-icon.svg";
import { convertShortNumber } from "utils/helper";

const HomeChart = ({
  categoriesXaxis,
  vatPerMonth,
  issuedPerMonth,
  data,
  receivedInvoice,
}) => {
  const [series, setSeries] = useState([
    {
      name: "Months",
      data: [],
    },
    {
      name: "Desktops",
      data: [],
    },
  ]);

  const [options, setOptions] = useState({
    chart: {
      type: "line",
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      show: false,
    },
    colors: ["#DF2244", "#00C67E"],

    grid: {
      borderColor: "#D1D7DE",
      xaxis: {
        labels: {
          style: {
            color: "red",
          },
        },
        lines: {
          show: true,
        },
      },
      yaxis: {
        labels: {
          style: {
            color: "red",
          },
        },
        lines: {
          show: true,
        },
      },
    },
    yaxis: {
      labels: {
        align: "left",
        style: {
          colors: ["#0d3b6b"],
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Poppins !important",
        },
        formatter: function (num) {
          const val = convertShortNumber(num, 0);
          return val;
        },
      },
    },
    xaxis: {
      formatter: function (num) {
        return <h1>{num}</h1>;
      },
      labels: {
        style: {
          colors: ["#0d3b6b"],
          fontSize: "14px",
          fontWeight: 400,
          fontFamily: "Poppins !important",
        },
      },
      categories: [],
    },
  });

  useEffect(() => {
    setSeries([
      {
        name: "Months",
        data: vatPerMonth,
      },
      {
        name: "Desktops",
        data: issuedPerMonth,
      },
    ]);
  }, [vatPerMonth, issuedPerMonth]);

  useEffect(() => {
    if (categoriesXaxis?.length > 0) {
      setOptions((prev) => {
        return {
          ...prev,
          xaxis: {
            categories: [...categoriesXaxis],
          },
        };
      });
    }
  }, [categoriesXaxis]);

  return (
    <>
      <Card className={style.card}>
        <h5>Overview of incoming and outgoing invoices - by month</h5>
        <div className={style.main}>
          <div className={style.flex}>
            <img src={green} alt="" />
            <div className={style.inner}>
              <p>Sent invoices</p>
              <h6>
                {data?.totalIssued
                  ? Number(data?.totalIssued)?.toLocaleString()
                  : 0}{" "}
                €
              </h6>
            </div>
          </div>
          <div className={style.flex}>
            <img src={redIcon} alt="" />
            <div className={style.inner}>
              <p>Received invoices</p>
              <h6>
                {receivedInvoice
                  ? Number(receivedInvoice)?.toLocaleString()
                  : 0}{" "}
                €
              </h6>
            </div>
          </div>
          <div className={style.flex}>
            <img src={greenUp} alt="" />
            <div className={style.inner}>
              <p>Profit by month</p>
              <h6>
                {data?.totalIssued - receivedInvoice
                  ? Number(data?.totalIssued - receivedInvoice).toLocaleString()
                  : 0}{" "}
                €
              </h6>
            </div>
          </div>
        </div>
        <div>
          <ApexChart series={series} options={options} height="320px" />
        </div>
      </Card>
    </>
  );
};

export default memo(HomeChart);
