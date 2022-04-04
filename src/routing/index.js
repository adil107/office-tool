import React from "react";
import { Navigate, Route, Routes as Switch } from "react-router-dom";

import Layout from "components/layout";

import { privateRoute, publicRoute } from "./helper";

const Routing = ({ isLogin }) => {
  return (
    <>
      {!isLogin && (
        <Switch>
          {publicRoute?.map((ele, index) => {
            const Element = ele.component;
            return <Route path={ele.path} element={Element} key={index} />;
          })}
          <Route path="*" element={<Navigate to="/login" />} />
        </Switch>
      )}

      {isLogin && (
        <Switch>
          {privateRoute?.map((ele, index) => {
            const Component = ele.component;
            return (
              <Route
                path={ele.path}
                element={<Layout>{Component}</Layout>}
                key={index}
              />
            );
          })}
          <Route path="*" element={<Navigate to="/" />} />
        </Switch>
      )}
    </>
  );
};

export default Routing;
