import moment from "moment/moment";
import React, { Fragment, useState } from "react";
import { useEffect } from "react";
import MainLayout from "../../../common/MainLayout";
import "./CustomCalander.css";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Select from "react-select";
const date = moment();
const CustomCalnder = () => {
  const [value, setValue] = useState(moment());
  const [allDayList, setAllDayList] = useState([]);
  const [monthValue, setMonthValue] = useState({});
  console.log(value, "value");
  const attendance = {
    month: "November",
    data: [
      { date: 1, isPresent: true },
      { date: 2, isPresent: true },
      { date: 3, isPresent: true },
      { date: 4, isPresent: true },
      { date: 5, isPresent: true },
      { date: 6, isPresent: true },
      { date: 7, isPresent: true },
      { date: 8, isPresent: false },
      { date: 9, isPresent: true },
      { date: 10, isPresent: false },
      { date: 11, isPresent: true },
      { date: 12, isPresent: true },
      { date: 13, isPresent: true },
      { date: 14, isPresent: true },
      { date: 15, isPresent: true },
      { date: 16, isPresent: true },
      { date: 17, isPresent: true },
      { date: 18, isPresent: true },
      { date: 19, isPresent: false },
      { date: 20, isPresent: true },
      { date: 21, isPresent: true },
      { date: 22, isPresent: true },
      { date: 23, isPresent: true },
      { date: 24, isPresent: true },
      { date: 25, isPresent: true },
      { date: 26, isPresent: true },
      { date: 27, isPresent: true },
      { date: 28, isPresent: true },
      { date: 29, isPresent: true },
      { date: 30, isPresent: true },
    ],
  };
  useEffect(() => {
    let end;
    if (monthValue) {
      end = Number(
        moment()
          .month(monthValue?.value || 0)
          .endOf("month")
          .format("D")
      );
      let end2 = moment()
        .month(+monthValue?.value || 0)
        .format("MMMM Do YYYY, h:mm:ss a");

      const previousMonthDays = [
        ...Array(
          Number(
            moment(monthValue?.value || 0)
              .startOf("month")
              .format("day")[0]
          )
        ),
      ];
      console.log(previousMonthDays, "previous month days end ", end2);
    } else {
      end = Number(moment(value).endOf("month").format("D"));
    }

    console.log(end, "moment js");
    let AllDaysInMonth = [];
    for (let i = 1; i <= end; i++) {
      if (i < 10) {
        AllDaysInMonth.push({ date: `0${i}` });
      } else {
        AllDaysInMonth.push({ date: `${i}` });
      }
    }
    const a3 = AllDaysInMonth.map((t1) => ({
      ...t1,
      ...attendance?.data?.find((t2) => +t2.date === +t1.date),
    }));
    setAllDayList(a3);
  }, [value, monthValue]);
  console.log(allDayList, "all day list ");

  // const currentMonthName = () => {
  //   return value.format("MMMM");
  // };
  // const currentYearName = () => {
  //   return value.format("YYYY");
  // };
  const prevMonth = () => {
    return value.clone().subtract(1, "month");
  };
  const nextMonth = () => {
    return value.clone().add(1, "month");
  };

  const currentDay = () => {
    if (Number(value.format("D")) < 10) {
      return "0" + value.format("D");
    } else {
      return value.format("D");
    }
  };

  const previousMonthDays = [
    ...Array(Number(moment(value).startOf("month").format("day")[0])),
  ];

  // const nextMonthDays =
  //   (Number(previousMonthDays.length || 0) + Number(allDayList.length || 0) > 35
  //     ? 42
  //     : 35) -
  //   (Number(previousMonthDays.length || 0) + Number(allDayList.length || 0));
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  console.log( moment().format('MMMM'), "moment montsh dot js");

  console.log(allDayList, "all day in month ");

   console.log(attendance.month===moment().format('MMMM'),"check",moment().format('MMMM') ,"check ",attendance.month)
  return (
    <MainLayout>
      <div style={{ width: "300px" }}>
        <Select
          styles={{ background: "white" }}
          options={[
            { label: "January", value: 0 },
            { label: "February", value: 1 },
            { label: "March", value: 2 },
            { label: "April", value: 3 },
            { label: "May", value: 4 },
            { label: "June", value: 5 },
            { label: "July", value: 6 },
            { label: "August", value: 7 },
            { label: "September", value: 8 },
            { label: "Octobar", value: 9 },
            { label: "November", value: 10 },
            { label: "December", value: 11 },
          ]}
          onChange={(valueOption) => {
            setMonthValue(valueOption);
            setValue(moment().month(valueOption?.value || 0));
          }}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, minmax(0, 1fr))",
        }}
      >
        {weeks.map((item) => (
          <span
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "20px",
              padding: "18px 0",
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="list">
        {previousMonthDays?.map((item, i) => {
          return (
            <div></div>
            // <div className="singleList" style={{ background: "gray" }}></div>
          );
        })}
        {allDayList.length > 0 &&
          allDayList.map((item, i) => {
            return (
              <Fragment key={i}>
                {item === currentDay() &&
                moment(date).format("YYYY") === moment(value).format("YYYY") &&
                moment(date).format("MMMM") === moment(value).format("MMMM") ? (
                  <div className="singleList">
                    <span style={{ color: "red" }}>{item.date}</span>

                    {/* <span className="today">Today</span> */}
                  </div>
                ) : (
                  <div className="singleList">
                    <span>{item.date}</span>
                    {
                      attendance.month===monthValue.label&&(<>
                      {/* attendance.month===moment().format('MMMM')&&(<> */}
                      
                      {item.isPresent ? (
                      <small
                        style={{
                          color: "white",
                          fontWeight: "bolder",
                          fontSize: "10px",
                          borderRadius: "10px",
                          marginTop: "2px",
                          background: "green",
                        }}
                      >
                        {item.isPresent ? "Prensent" : "Absent"}
                      </small>
                    ) : (
                      <small
                        style={{
                          color: "black",
                          padding: "0 5px",
                          fontWeight: "bolder",
                          fontSize: "10px",
                          borderRadius: "10px",
                          marginTop: "2px",
                          background: "goldenrod",
                        }}
                      >
                        {item.isPresent ? "Prensent" : "Absent"}
                      </small>
                    )}
                      </>)
                    }
                  </div>
                )}
              </Fragment>
            );
          })}
        {/* {[...Array(nextMonthDays < 0 ? 0 : nextMonthDays).keys()].length > 0 &&
          [...Array(nextMonthDays || 0).keys()]?.map((item) => (
            <div style={{ background: "gray" }} className="singleList ">
              {console.log(nextMonthDays, item)}
              <span>{item + 1}</span>
            </div>
          ))} */}
      </div>

      <div className="footer">
        <div className="header">
          <div className="icons">
            <ArrowBackIosIcon
              onClick={() => setValue(prevMonth())}
              className="arrow"
            />
            <ArrowForwardIosIcon
              onClick={() => setValue(nextMonth())}
              className="arrow"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CustomCalnder;
