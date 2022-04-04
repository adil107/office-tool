/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

import { Navbar } from "components/layout/navbar";
import Omnibar from "components/omnibar";

import OmnibarSelected from "components/omnibar-selected";
import MyClientTable from "./my-client-table";
import ModuleContext from "finance-client-context";
import axios from "utils/axios";
import { my_clients, search_clients } from "utils/endpoints";
import { useSelector } from "react-redux";
import { convertArr } from "utils/helper";

import style from "./my-client.module.scss";
import hideIcon from "assets/icons/hide-icon-blue.svg";
import eyeBlue from "assets/icons/hide-icon-blue.svg";
import deleteIcon from "assets/icons/delete-icon-blue.svg";
import ModuleLoader from "components/module-loader";

const MyClient = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectCheckboxVal, setSelectCheckboxVal] = useState([]);
  const [clientList, setClientList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const { token, userData } = useSelector((state) => state.auth);

  const handleClientSearch = async (e) => {
    // console.log(tabsList[activeTab]);
    setSearchValue(e?.target?.value);
    handleFetchClients(e?.target?.value, true);
  };

  const handleFetchClients = async (searchVal, boolean) => {
    !boolean && setIsLoading(true);
    try {
      const res = await axios.post(boolean ? search_clients : my_clients, {
        token: "demo",
        userToken: token,
        ...(searchVal && { keywords: searchVal }),
      });
      if (res?.data?.error === 0) {
        const tempArr = convertArr(res?.data?.clients);
        setClientList([...tempArr]);
      } else {
        setClientList([]);
      }

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    token && handleFetchClients();
  }, [token, userData, activeTab]);

  return (
    <ModuleContext
      tableData={clientList}
      setSelectCheckboxVal={setSelectCheckboxVal}
      selectCheckboxVal={selectCheckboxVal}
    >
      <Navbar title="My clients" />

      {isLoading ? (
        <ModuleLoader />
      ) : (
        <>
          <div className={style.headerBar}>
            {selectCheckboxVal?.length > 0 ? (
              <OmnibarSelected
                btnList={btnList}
                text={`Število izbranih strank: ${selectCheckboxVal?.length}`}
              />
            ) : (
              <Omnibar
                tabsList={tabsList}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                handleSearch={handleClientSearch}
                searchValue={searchValue}
              />
            )}
          </div>
          <MyClientTable />
        </>
      )}
    </ModuleContext>
  );
};

export default MyClient;

const tabsList = ["All invoices", "Blocks", "Danger", "Liquidation", "Hidden"];
const btnList = [
  { text: "Hide client", icon: hideIcon },
  { text: "Unhide client", icon: eyeBlue },
  { text: "Delete  client", icon: deleteIcon },
];
