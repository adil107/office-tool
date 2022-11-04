import React, { Fragment, useState } from "react";
import { useSelector } from "react-redux";

import { RestructuringCard } from "components/restructuring-card";
import { Navbar } from "components/layout/navbar";
import { createNotification } from "common/create-notification";
import { request_support } from "utils/endpoints";
import axios from "utils/axios";
import { cards } from "./helper";

import style from "./legal.module.scss";
import comment from "assets/legal_financial/comment.svg";

const LegalHelp = () => {
  const { token } = useSelector((state) => state.auth);
  const [cardList, setCardList] = useState([...cards]);

  const handleLoadingCheck = (index, id, boolean) => {
    const temp = [...cardList];
    temp[index].card?.forEach((ele) => {
      if (ele?.id === id) {
        ele.loading = boolean;
      }
    });
    setCardList([...temp]);
  };

  const handleClick = async (index, id) => {
    handleLoadingCheck(index, id, true);
    try {
      const res = await axios.post(request_support, {
        token: "demo",
        userToken: token,
        requestType: "ppp",
      });
      if (res?.data?.error === 0) {
        createNotification("success", "Success", res?.data?.msg);
      } else {
        createNotification("error", "Error", res?.data?.msg);
      }
      handleLoadingCheck(index, id, false);
    } catch (err) {
      handleLoadingCheck(index, id, false);
    }
  };

  return (
    <div className={style.main}>
      <Navbar title="Legal help" />

      <div className={style.legal}>
        <p className={style.p}>
          Če dokumenti v “osnutki pogodb” ni dovolj za vaše potrebe, tukaj
          najdete naše storitve - kjer naredimo custom pogodbe za vaš specifičen
          primer.
        </p>
        <div className={style.firstDiv}>
          {cardList?.map((ele, index) => (
            <Fragment key={index}>
              <h6 className={style.h6}>{ele.heading}</h6>
              <div className={style.grid1}>
                {ele?.card.length > 0 &&
                  ele?.card?.map((item, ind) => (
                    <Fragment key={ind}>
                      <RestructuringCard
                        icon={item.icon}
                        headingTitle={item.headingTitle}
                        paragraph={item.paragraph}
                        priceAmount={item.priceAmount}
                        btnTitle="Request a call back"
                        btnIcon={comment}
                        handleBtnClick={() => handleClick(index, item?.id)}
                        isLoading={item?.loading}
                      />
                    </Fragment>
                  ))}
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LegalHelp;
