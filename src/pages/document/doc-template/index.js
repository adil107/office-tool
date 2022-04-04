import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { RestructuringCard } from "components/restructuring-card";
import { Navbar } from "components/layout/navbar";

import style from "./doc_template.module.scss";
import comment from "assets/legal_financial/comment.svg";
import predracun from "assets/legal_financial/predracun.svg";
import predracunWhite from "assets/legal_financial/predracun-white.svg";

import Vector from "assets/legal_financial/Vector.svg";
import Group from "assets/legal_financial/Group.svg";
import document from "assets/legal_financial/documents.svg";

const DocTemplate = () => {
  const navigate = useNavigate();

  return (
    <div className={style.main}>
      <Navbar title="Doc. templates" />

      <div className={style.legal}>
        <p className={style.p}>
          Če dokumenti v “osnutki pogodb” ni dovolj za vaše potrebe, tukaj
          najdete naše storitve - kjer naredimo custom pogodbe za vaš specifičen
          primer.
        </p>
        <div className={style.firstDiv}>
          {cards.map((ele, index) => (
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
                        btnTitle={item.btnText}
                        btnIcon={item?.btnIcon}
                        handleBtnClick={() => navigate("/new-documents")}
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

export default DocTemplate;

const cards = [
  {
    heading: "Preoblikovanje podjetja",
    card: [
      {
        icon: Group,
        headingTitle: "Posojilna pogodba",
        btnText: "Pripravi dokument",
        btnIcon: predracunWhite,

        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
      },
      {
        icon: Group,
        headingTitle: "Pogodba 1",
        btnText: "Pripravi dokument",
        btnIcon: predracunWhite,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
      },
      {
        icon: Group,
        headingTitle: "Pogodba 2",
        btnText: "Pripravi dokument",
        btnIcon: predracunWhite,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
      },
    ],
  },
  {
    heading: "Priprava pogodb",
    card: [
      {
        icon: Group,
        headingTitle: "Pogodba 3",
        btnText: "Pripravi dokument",
        btnIcon: predracunWhite,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
      },

      {
        icon: Group,
        headingTitle: "Pogodba 4",
        btnText: "Pripravi dokument",
        btnIcon: predracunWhite,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
      },
    ],
  },
  {
    heading: "3. Stvar v seznamu",
    card: [
      {
        icon: Group,
        headingTitle: "Company restructuring",
        btnText: "Request a call back",
        btnIcon: comment,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "100 EUR",
      },
      {
        icon: Vector,
        headingTitle: "Odpiranje TRR - Revolut",
        btnText: "Request a call back",
        btnIcon: comment,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "50 EUR",
      },
      {
        icon: predracun,
        headingTitle: "Izdaja A1",
        btnText: "Request a call back",
        btnIcon: comment,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "150 EUR",
      },
    ],
  },
  {
    heading: "Preoblikovanje podjetja",
    card: [
      {
        icon: predracun,
        headingTitle: "Priprava pogodbe o zaposlitvi",
        btnText: "Request a call back",
        btnIcon: comment,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "75 EUR",
      },

      {
        icon: document,
        headingTitle: "Priprava pravilnikov",
        btnText: "Request a call back",
        btnIcon: comment,
        paragraph:
          "Zaracunavamo vam obresti iz posojilne pog...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque augue arcu odio id aliquam quis. Non nisl vitae a lorem id eget arcu. Sagittis, risus diam aliquam vitae consectetur pretium suspendisse nibh.",
        priceAmount: "250 EUR",
      },
    ],
  },
];
