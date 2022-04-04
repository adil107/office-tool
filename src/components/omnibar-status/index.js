import React from "react";

import Card from "components/card";
import ChipBar from "components/chip-bar";
import StatuePopup from "components/status-popup";
import FigureElements from "components/figure-elements";

import style from "./omnibar-status.module.scss";
import arrowDown from "assets/icons/arrow down-blue.svg";

const OmnibarStatus = ({ setOpen, open, statusVal, setStatusVal }) => {
  return (
    <Card className={style.cardWrapper}>
      <div className={style.cardContentWrapper}>
        <div className={style.div} style={{ flexBasis: "126px" }}>
          <p className={style.p}>Invoice no.</p>
          <div className={style.contentDiv}>
            <p>1-2021</p>
            <small>Avansni</small>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "341px" }}>
          <p className={style.p}>Debtor</p>

          <div className={style.contentDiv}>
            <p style={{ fontWeight: "bold" }}>
              DM Transport Milorad TOMić s.p.
            </p>
            <p style={{ fontSize: "12px" }}>
              Zaracunavamo vam obresti iz posojilne pog...
            </p>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "142px" }}>
          <p className={style.p}>Date of issue</p>
          <div className={style.contentDiv}>
            <p style={{ fontSize: "14px" }}>01.01.2022</p>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "80px" }}>
          <p className={style.p}>Due</p>
          <div className={style.contentDiv}>
            <p style={{ fontSize: "14px" }}>01.01.2022</p>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "90px" }}>
          <p className={style.p}>Late</p>
          <div className={style.contentDiv}>
            <div className={style.FigureElementsDiv}>
              <FigureElements value={6} />
            </div>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "205px" }}>
          <p className={style.p}>Amount with VAT</p>
          <div className={style.contentDiv}>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                lineHeight: "27px",
              }}
            >
              1.127.000,45 €
            </p>
          </div>
        </div>

        <div className={style.div} style={{ flexBasis: "209px" }}>
          <p className={style.p}>Status</p>

          <div className={style.contentDiv}>
            <div style={{ display: "flex", position: "relative" }}>
              <ChipBar status={statusVal} />
              <div onClick={() => setOpen(true)}>
                <Card className={style.dropDown}>
                  <img src={arrowDown} alt="" />
                </Card>
              </div>
              {open && (
                <div
                  style={{
                    position: "absolute",
                    width: "128px",
                    height: "136px",
                    top: "110%",
                  }}
                >
                  <StatuePopup
                    setOpen={setOpen}
                    status={statusVal}
                    setStatusVal={setStatusVal}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default OmnibarStatus;
