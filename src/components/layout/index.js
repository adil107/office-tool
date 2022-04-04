import React from "react";

import Sidebar from "./sidebar";
import Container from "components/container";

import style from "./layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={style.layoutWrapper}>
      <aside>
        <Sidebar />
      </aside>

      <main>
        <Container>{children}</Container>
      </main>
    </div>
  );
};

export default Layout;
