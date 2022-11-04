import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { Navbar } from "components/layout/navbar";
import OldNewStatus from "components/old-new-status";
import { OmnibarClient } from "components/omnibar-client";
import ClientCompanyInformation from "./company-information";
import ClientLastChange from "./last-change";
import axios from "utils/axios";
import { client_info } from "utils/endpoints";

import style from "./client-overview.module.scss";
import ModuleLoader from "components/module-loader";
import { rows } from "./helper";

const ClientOverview = () => {
  const [clientData, setClientData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const { token, userData } = useSelector((state) => state.auth);

  useEffect(() => {
    const clientInfoFetch = async () => {
      setIsLoading(true);
      const res = await axios.post(client_info, {
        token: "demo",
        userToken: token,
        clientId: params?.id,
      });
      if (res?.data?.error === 0) {
        setClientData({ ...res.data?.client });
      }
      setIsLoading(false);
    };
    if (token && params?.id) clientInfoFetch();
  }, [token, params, userData]);

  return (
    <>
      <Navbar
        title="Client overview"
        backArrow
        subtitle="DM Transport"
        handleBack={() => navigate(-1)}
      />

      {isLoading ? (
        <ModuleLoader />
      ) : (
        <div
          style={{
            height: "calc(100vh - 116px)",
            overflowY: "auto",
            padding: "0 8px 7px 4px",
          }}
        >
          <OmnibarClient data={clientData} />
          <ClientLastChange clientData={clientData} />
          <div className={style.OldNewStatus}>
            <OldNewStatus rows={rows} />
          </div>
          <ClientCompanyInformation clientData={clientData} />
        </div>
      )}
    </>
  );
};

export default ClientOverview;
