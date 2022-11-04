import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";

import { RestructuringCard } from "components/restructuring-card";
import { Navbar } from "components/layout/navbar";
import { cards } from "./helper";

import style from "./doc_template.module.scss";

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
