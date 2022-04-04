import React, { useState } from "react";

import { Navbar } from "components/layout/navbar";
import Omnibar from "components/omnibar";
import OmnibarSelected from "components/omnibar-selected";
import ModuleContext from "finance-client-context";
import ProformaTable from "./proforma-table";

import style from "./proforma.module.scss";

const Proforma = () => {
  const [activeTab, setActiveTab] = useState(0);

  const [selectCheckboxVal, setSelectCheckboxVal] = useState([]);

  return (
    <ModuleContext
      tableData={tableData}
      selectCheckboxVal={selectCheckboxVal}
      setSelectCheckboxVal={setSelectCheckboxVal}
    >
      <Navbar title="Predračuni" />
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
      </div>

      <ProformaTable />
    </ModuleContext>
  );
};

export default Proforma;

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
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "2",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: true,
    amountWithVAT: "1.127.000,45 €",
    status: "Poslano",
  },
  {
    id: "3",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Prejeto",
  },
  {
    id: "4",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "5",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "6",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: true,
    amountWithVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "7",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Prejeto",
  },
  {
    id: "8",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "9",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: true,
    amountWithVAT: "1.127.000,45 €",
    status: "Poslano",
  },
  {
    id: "10",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "11",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Paid",
  },
  {
    id: "12",
    invoiceNo: "1-2021",
    debtor: "DM Transport Milorad TOMić s.p.",
    debtorBasic: "Zaracunavamo vam obresti iz posojilne pog...",
    dateIssue: "01.01.2022",
    dueLateDate: "10.01.2022",
    late: false,
    amountWithVAT: "1.127.000,45 €",
    status: "Paid",
  },
];
