import React from "react";
import ReactDatePicker from "react-datepicker";

import style from "./date.module.scss";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "assets/icons/calendar.svg";

const DatePicker = ({
  error,
  name,
  label,
  className,
  placeholder,
  id,
  dateValue,
  minDate,
  maxDate,
  handleChange,
  inputClass,
  reactDatePickerClass,
}) => {
  return (
    <>
      <div className={`${style.main} ${className}`}>
        {label && <label className={style.label}>{label}</label>}
        <div className={`${style.inpDiv} ${inputClass}`}>
          <ReactDatePicker
            id={id || "id5"}
            name={name}
            className={`${style.datePicker} ${reactDatePickerClass}`}
            onChange={handleChange && handleChange}
            selected={dateValue}
            placeholderText={placeholder || "dd.mm.yyyy"}
            dateFormat="dd.MM.yyyy"
            autoComplete="off"
            minDate={minDate || ""}
            maxDate={maxDate || ""}
            popperClassName={style.poper}
          />

          <label htmlFor={id || "id5"}>
            <div className={style.icon}>
              <img src={calendar} alt="" />
            </div>
          </label>
        </div>
        {error ? (
          <span className={style.errorMessage}>Date is required</span>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default DatePicker;
