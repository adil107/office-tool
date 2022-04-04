/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useState } from "react";
import { checkAllCheckboxBoolean, selectAllCheckboxToggle } from "utils/helper";

export const FinanceContext = createContext({});
const Provider = FinanceContext.Provider;

const ModuleContext = ({
  children,
  setSelectCheckboxVal,
  selectCheckboxVal,
  tableData,
}) => {
  const [columnCheckbox, setColumnCheckBox] = useState(false);
  const [omnibarSelectedCheckbox, setOmnibarSelectedCheckbox] = useState(false);
  const [rowCheckboxName, setRowCheckboxName] = useState({});
  const [tableDataList, setTableDataList] = useState([]);
  const pageSize = 10;

  const [minMax, setMinMax] = useState({
    min: 1,
    max: pageSize,
  });
  const totalNoOfData = tableData?.length;
  const indexOfLastPost = minMax?.min * minMax?.max;
  const indexOfFirstPost = indexOfLastPost - minMax?.max;

  const handleNext = () => {
    if (indexOfLastPost < tableData?.length) {
      setMinMax({ ...minMax, min: minMax.min + 1 });
    }
  };
  const handlePrevious = () => {
    if (minMax?.min > 1) {
      setMinMax({ ...minMax, min: minMax.min - 1 });
    }
  };

  const allCheckboxValueFun = (arr) => {
    const output = [];
    const tempArr = JSON.parse(JSON.stringify([...arr]));
    tempArr.forEach((ele) => {
      output.push(ele?.id);
    });
    return output;
  };

  const handleOmnibarSelectedChange = () => {
    const tempObj = { ...rowCheckboxName };
    const rowCheckbox = selectAllCheckboxToggle(false, tempObj);
    setColumnCheckBox(false);
    setOmnibarSelectedCheckbox(false);
    setRowCheckboxName({ ...rowCheckbox });
    setSelectCheckboxVal([]);
  };

  const handleRowCheckboxChange = (e) => {
    if (e.target.checked) {
      setSelectCheckboxVal([...selectCheckboxVal, e.target.name]);
      setRowCheckboxName({
        ...rowCheckboxName,
        [e.target.name]: e.target.checked,
      });
      setOmnibarSelectedCheckbox(true);
    } else {
      const temp = [...selectCheckboxVal];
      let index = temp.findIndex((ele) => ele === e.target.name);
      temp.splice(index, 1);
      setSelectCheckboxVal([...temp]);
      setRowCheckboxName({
        ...rowCheckboxName,
        [e.target.name]: e.target.checked,
      });
      if (!selectCheckboxVal?.length) setOmnibarSelectedCheckbox(false);
    }
  };

  const handleColumnChange = (e) => {
    const tempObj = { ...rowCheckboxName };
    if (e.target.checked) {
      const arrValue = allCheckboxValueFun(tableDataList);
      setSelectCheckboxVal([...arrValue]);
      const rowCheckbox = selectAllCheckboxToggle(true, tempObj);
      setColumnCheckBox(true);
      setRowCheckboxName({ ...rowCheckbox });
      setOmnibarSelectedCheckbox(true);
    } else {
      const rowCheckbox = selectAllCheckboxToggle(false, tempObj);
      setColumnCheckBox(false);
      setOmnibarSelectedCheckbox(false);
      setRowCheckboxName({ ...rowCheckbox });
      setSelectCheckboxVal([]);
    }
  };

  useEffect(() => {
    if (tableDataList?.length) {
      const tempArr = JSON.parse(JSON.stringify([...tableDataList]));
      let tempObj = {};
      tempArr.forEach((ele) => {
        tempObj = { ...tempObj, [ele?.id]: false };
      });
      setRowCheckboxName({ ...tempObj });
    }
  }, [tableDataList]);

  useEffect(() => {
    if (tableDataList?.length > 0) {
      const selectAllCheck = checkAllCheckboxBoolean(rowCheckboxName);
      if (selectAllCheck === true) {
        setColumnCheckBox(true);
      } else {
        setColumnCheckBox(false);
      }
    }
  }, [rowCheckboxName]);

  useEffect(() => {
    const dataList = tableData?.slice(indexOfFirstPost, indexOfLastPost);
    setTableDataList(dataList);
  }, [tableData, minMax]);

  return (
    <Provider
      value={{
        handleRowCheckboxChange,
        handleColumnChange,
        handleOmnibarSelectedChange,
        handleNext,
        handlePrevious,
        columnCheckbox,
        rowCheckboxName,
        omnibarSelectedCheckbox,
        tableData: tableDataList,
        indexOfFirstPost,
        indexOfLastPost,
        count: totalNoOfData,
      }}
    >
      {children}
    </Provider>
  );
};

export default ModuleContext;
