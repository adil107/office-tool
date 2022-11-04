import style from "./notification.module.scss";

export const notification = [
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
