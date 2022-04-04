import React from "react";

import style from "./figure.module.scss";

const FigureElements = ({ value, backgroundColor, className }) => {
  return (
    <div
      className={`${style.main} ${className && className}`}
      style={{ backgroundColor: backgroundColor || value < 0 ? "#DF2244" : "#00C67E" }}
    >
      <p>{value}</p>
    </div>
  );
};

export default FigureElements;
