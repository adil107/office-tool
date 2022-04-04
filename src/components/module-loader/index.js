import Loading from "components/loading";
import React from "react";

import style from "./loader.module.scss";

const ModuleLoader = () => {
  return (
    <div className={style.wrapper}>
      <Loading loaderClass={style.loaderStyle} />
    </div>
  );
};

export default ModuleLoader;
