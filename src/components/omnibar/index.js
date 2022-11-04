import React, { useState, useContext } from "react";

import Card from "components/card";
import TextField from "components/text-field";

import style from "./omnibar.module.scss";
import filterIcon from "assets/icons/settings-blue.svg";

import rightArrow from "assets/icons/right-arrow.svg";
import rightArrowBlue from "assets/icons/right-arrow-blue.svg";
import leftArrow from "assets/icons/left-arrow.svg";
import leftArrowBlue from "assets/icons/left-blue-arrow.svg";
import SearchPopup from "components/serach-popup";
import { FinanceContext } from "finance-client-context";

const Omnibar = ({
  tabsList,
  activeTab,
  setActiveTab,
  handleSearch,
  searchValue,
}) => {
  const [open, setOpen] = useState(false);
  const {
    handleNext,
    handlePrevious,
    indexOfFirstPost,
    indexOfLastPost,
    count,
  } = useContext(FinanceContext);

  return (
    <Card className={style.cardWrapper}>
      <div className={style.contentWrapper}>
        {/* tabsList */}
        <div className={style.tabsDiv}>
          {tabsList?.map((ele, index) => (
            <div
              key={index}
              className={`${style.tabsTextDiv} ${
                activeTab === index && style.activeTabTextDiv
              }`}
              onClick={() => setActiveTab(index)}
            >
              <p>{ele}</p>
            </div>
          ))}
        </div>

        <div className={style.searchSortDiv}>
          <div className={style.searchDiv}>
            <TextField
              handleIconClick={() => setOpen(!open)}
              searchIcon={true}
              icon={filterIcon}
              placeholder="Search...."
              handleChange={handleSearch}
              value={searchValue}
            />
            {open && (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  top: "110%",
                }}
              >
                <SearchPopup setOpen={setOpen} open={open} />
              </div>
            )}
          </div>

          <div className={style.paginationDiv}>
            <p>
              {count > 0 ? (
                <>
                  {indexOfFirstPost + 1}-
                  {indexOfLastPost > count ? count : indexOfLastPost} of {count}
                </>
              ) : (
                "0-0 of 0"
              )}
            </p>
          </div>
          <div className={style.leftRightIconDiv}>
            <img
              src={indexOfFirstPost + 1 > 1 ? leftArrowBlue : leftArrow}
              alt=""
              style={{
                width: "14px",
                height: "14px",
                cursor: "pointer",
                pointerEvents: indexOfFirstPost + 1 > 1 ? "auto" : "none",
              }}
              onClick={handlePrevious}
            />

            <img
              src={indexOfLastPost < count ? rightArrowBlue : rightArrow}
              alt=""
              onClick={handleNext}
              style={{
                width: "14px",
                height: "14px",
                cursor: "pointer",
                pointerEvents: indexOfLastPost < count ? "auto" : "none",
              }}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Omnibar;
