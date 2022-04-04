import React, { useEffect } from "react";
import { NotificationContainer } from "react-notifications";

import Routing from "./routing";

import "react-notifications/lib/notifications.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchMyCompany } from "redux/actions";

const App = () => {
  const dispatch = useDispatch();

  const { token } = useSelector((state) => state.auth);
  useEffect(() => {
    if (token) dispatch(fetchMyCompany());
  }, [token, dispatch]);
  return (
    <>
      <Routing isLogin={token} />
      <NotificationContainer />
    </>
  );
};

export default App;
