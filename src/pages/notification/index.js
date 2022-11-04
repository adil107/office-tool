import React from "react";
import { useNavigate } from "react-router-dom";

import { Navbar } from "components/layout/navbar";
import Card from "components/card";
import { notification } from "./helper";

import style from "./notification.module.scss";
import cross from "assets/icons/cross.svg";

const Notification = () => {
  const navigate = useNavigate();

  return (
    <div className={style.main}>
      <Navbar title="Notifications" />
      <Card className={style.card}>
        <img
          src={cross}
          alt=""
          className={style.cross}
          onClick={() => navigate("/")}
        />
        <div>
          {notification.map((ele, index) => (
            <div key={index} className={style.contentDiv}>
              <p className={style.mainTitle}>{ele.heading}</p>
              {ele?.notificationCard?.map((item, ind) => (
                <div className={style.notification} key={ind}>
                  <p className={style.minutes}>{item.minutes}</p>
                  <div
                    className={`${style.borderDiv} ${
                      item.active ? style.borderBlue : style.borderGray
                    }`}
                  ></div>
                  <div className={style.circleDiv}></div>
                  <div style={{ flex: 1 }}>
                    <h6
                      className={
                        item.active ? style.titleBlue : style.titleGary
                      }
                    >
                      {item.title}
                    </h6>
                    <p className={style.subtitle}>{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Notification;
