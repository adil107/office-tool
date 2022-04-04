import React, { useState } from "react";

import { Navbar } from "components/layout/navbar";
import OmnibarSelected from "components/omnibar-selected";
import Omnibar from "components/omnibar";

import AdvanceTable from "./advance";

import BasicTable from "./basic";
import ModuleContext from "finance-client-context";

import style from "./receive.module.scss";
import negativeIcon from "assets/icons/negative.svg";

const ReceiveInvoice = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectCheckboxVal, setSelectCheckboxVal] = useState([]);
  const [toggleTableOpen, setToggleTableOpen] = useState(false);
  const [basicAdvanceVal, setBasicAdvanceVal] = useState("Advance");

  const handleBasicAdvanceFn = (e) => {
    setBasicAdvanceVal(e.target.value);
    setToggleTableOpen(false);
  };

  return (
    <ModuleContext
      tableData={tableData}
      setSelectCheckboxVal={setSelectCheckboxVal}
      selectCheckboxVal={selectCheckboxVal}
    >
      <Navbar title="Prejeti računi" arrowIcon={negativeIcon} />
      <div className={style.headerBar}>
        {selectCheckboxVal?.length > 0 ? (
          <OmnibarSelected
            btnList={btnList}
            text={`No. of selected items: ${selectCheckboxVal?.length}`}
          />
        ) : (
          <Omnibar
            tabsList={tabsList}
            activeTab={activeTab}
            setActiveTab={setActiveTab}
          />
        )}

        {basicAdvanceVal === "Advance" ? (
          <AdvanceTable
            toggleTableOpen={toggleTableOpen}
            setToggleTableOpen={setToggleTableOpen}
            handleBasicAdvanceFn={handleBasicAdvanceFn}
            basicAdvanceVal={basicAdvanceVal}
          />
        ) : (
          <BasicTable
            toggleTableOpen={toggleTableOpen}
            setToggleTableOpen={setToggleTableOpen}
            handleBasicAdvanceFn={handleBasicAdvanceFn}
            basicAdvanceVal={basicAdvanceVal}
          />
        )}
      </div>
    </ModuleContext>
  );
};

export default ReceiveInvoice;

const tabsList = ["All invoices", "Paid", "Advance", "Cancelled"];
const btnList = [
  { text: "Download PDF" },
  { text: "Overview of obligations" },
  { text: "Send to email" },
];

const tableData = [
  {
    id: "1",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 6,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "2",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: -6,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Poslano",
  },
  {
    id: "3",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 6,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Prejeto",
  },
  {
    id: "4",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: -999,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "5",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 6,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "6",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 6,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "7",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 6,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Prejeto",
  },
  {
    id: "8",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 6,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "9",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: -4,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Poslano",
  },
  {
    id: "10",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 8,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "11",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 9,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "12",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: 10,
    amountWithVAT: "1.127.000,45 €",
    amountWithOutVAT: "1.127.000,45 €",
    status: "Paid",
  },
];
