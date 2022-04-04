import React, { Fragment, useState } from "react";

import { RestructuringCard } from "components/restructuring-card";
import { Navbar } from "components/layout/navbar";
import axios from "utils/axios";
import { request_support } from "utils/endpoints";
import { useSelector } from "react-redux";
import { createNotification } from "common/create-notification";

import style from "./financial.module.scss";
import comment from "assets/legal_financial/comment.svg";
import predracun from "assets/legal_financial/predracun.svg";
import Vector from "assets/legal_financial/Vector.svg";
import Group from "assets/legal_financial/Group.svg";
import document from "assets/legal_financial/documents.svg";

const FinancialHelp = () => {
  const [cardList, setCardList] = useState([...cards]);
  const { token } = useSelector((state) => state.auth);

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
      <Navbar title="Financial help" />

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

export default FinancialHelp;

const cards = [
  {
    heading: "Preoblikovanje podjetja",
    card: [
      {
        id: "1",
        icon: Group,
        headingTitle: "Company restructuring",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "100 EUR",
        loading: false,
      },
      {
        id: "2",
        icon: Vector,
        headingTitle: "Odpiranje TRR - Revolut",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "50 EUR",
        loading: false,
      },
      {
        id: "3",
        icon: predracun,
        headingTitle: "Izdaja A1",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "150 EUR",
        loading: false,
      },
    ],
  },
  {
    heading: "Priprava pogodb",
    card: [
      {
        id: "4",
        icon: predracun,
        headingTitle: "Priprava pogodbe o zaposlitvi",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "75 EUR",
        loading: false,
      },

      {
        id: "5",
        icon: document,
        headingTitle: "Priprava pravilnikov",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "250 EUR",
        loading: false,
      },
    ],
  },
  {
    heading: "3. Stvar v seznamu",
    card: [
      {
        id: "6",
        icon: Group,
        headingTitle: "Company restructuring",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "100 EUR",
        loading: false,
      },
      {
        id: "7",
        icon: Vector,
        headingTitle: "Odpiranje TRR - Revolut",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "50 EUR",
        loading: false,
      },
      {
        id: "8",
        icon: predracun,
        headingTitle: "Izdaja A1",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "150 EUR",
        loading: false,
      },
    ],
  },
  {
    heading: "Preoblikovanje podjetja",
    card: [
      {
        id: "9",
        icon: predracun,
        headingTitle: "Priprava pogodbe o zaposlitvi",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "75 EUR",
        loading: false,
      },

      {
        id: "10",
        icon: document,
        headingTitle: "Priprava pravilnikov",
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "250 EUR",
        loading: false,
      },
    ],
  },
];
