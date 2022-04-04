import React from "react";

import { Navbar } from "components/layout/navbar";
import Card from "components/card";

import style from "./notification.module.scss";
import cross from "assets/icons/cross.svg";
import { useNavigate } from "react-router-dom";

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

const notification = [
  {
    heading: "Today",

    notificationCard: [
      {
        minutes: "2m ago",

        title: (
          <>
            <span className={style.spanClass}>Jackie Kun</span> mentioned you at
            <span className={style.blueClass}> Tagih Projects</span>
          </>
        ),
        date: "Monday, June 31 2020",
        active: true,
      },
      {
        minutes: "6m ago",

        title: (
          <>
            <span className={style.spanClass}>[REMINDER]</span> Due date of{" "}
            <span className={style.blueClass}> High Studios Projects</span> the
            task will be coming
          </>
        ),

        date: "Monday, June 31 2020",
        active: true,
      },
      {
        minutes: "16m ago",

        title: (
          <>
            <span className={style.spanClass}>Olivia Johanna</span> has created
            new task at
            <span className={style.blueClass}> Projects Tagih</span>
          </>
        ),

        date: "Monday, June 31 2020",

        active: true,
      },
      {
        minutes: "4h ago",

        title: (
          <>
            <span className={style.spanClass}>Jackie Kun</span> commented at
            <span className={style.blueClass}> Portu Projects</span> “Hei,
            please update the progress gu..
          </>
        ),

        date: "Monday, June 31 2020",
        active: true,
      },
      {
        minutes: "12:31 AM",

        title: (
          <>
            <span className={style.spanClass}>You</span> has moved
            <span className={style.spanClass}>
              {" "}
              “Wireframing Landing Page”
            </span>{" "}
            task to Done
          </>
        ),

        date: "Monday, June 31 2020",

        active: false,
      },
    ],
  },

  {
    heading: "Yesterday",
    notificationCard: [
      {
        minutes: "2m ago",

        title: (
          <>
            <span className={style.grayBold}> Reny</span> mentioned you at
            <span className={style.grayBold}> Fullspeed Projects</span>
          </>
        ),

        active: false,
        date: "Monday, June 31 2020",
      },
      {
        minutes: "2m ago",

        title: (
          <>
            <span className={style.grayBold}> Jackie Kun</span> mentioned you at
            <span className={style.grayBold}> Portu Projects</span>
          </>
        ),

        active: false,
        date: "Monday, June 31 2020",
      },
    ],
  },
];
