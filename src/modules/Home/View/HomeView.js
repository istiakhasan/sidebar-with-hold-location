import React, { useRef } from "react";

import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config/firebase.config";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HomeCard from "./HomeCard";
import ReactApexChart from "react-apexcharts";

const HomeView = () => {
  const formRef = useRef();

  const calculateTotal = (obj) => {
    const fieldValue = Object.values(obj);
    const slicedValue = fieldValue.slice(0, fieldValue.length - 1);

    let total = slicedValue.reduce((a, b) => Number(a) + Number(b), 0);
    formRef?.current?.setFieldValue("field3", total);
  };
  const calculateAverage = (v) => {
    const total = v.field3;
    delete v.field3;
    const average = +total / Object.keys(v).length;

    for (let item in v) {
      formRef?.current?.setFieldValue([item], average);
    }
  };
  const [signInWithGoogle, , loading, error] = useSignInWithGoogle(auth);
  const [user2, loading2] = useAuthState(auth);
  if (loading && error && loading2) {
    return;
  }

  const state = {
    series: [
      {
        name: "Servings",
        data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35],
      },
    ],

    options: {
      annotations: {
        points: [
          {
            x: "Bananas",
            seriesIndex: 0,
            label: {
              borderColor: "#fffff",
              offsetY: 0,
              style: {
                color: "#fff",
                background: "#775DD0",
              },
              text: "Bananas are good",
            },
          },
        ],
      },
      chart: {
        height: 350,
        type: "bar",
      },
      plotOptions: {
        bar: {
          borderRadius: 0,
          columnWidth: "30%",
        },
      },

      xaxis: {
        labels: {
          rotate: -45,
        },
        categories: [
          "Apples",
          "Oranges",
          "Strawberries",
          "Pineapples",
          "Mangoes",
          "Bananas",
          "Blackberries",
          "Pears",
          "Watermelons",
          "Cherries",
          "Pomegranates",
          "Tangerines",
          "Papayas",
        ],
        tickPlacement: "on",
      },
      fill: {
        colors: ["#176E6D", "#176E6D", "#176E6D"],
      },
    },
  };

  return (
    <div className="">
      <div className="row">
        <HomeCard title="New Accounts" percentage="234" total="58" />
        <HomeCard title="Total Expenses" percentage="71" total="62" />
        <HomeCard title="Company Value" percentage="$ 1,45M" total="72" />
        <HomeCard title="New Employess" percentage="34 hires" total="81" />
      </div>
      <div className="row mt-5">
        <div className="col-md-8">
          <div className=" bar-chart-wraper">
            <div id="chart">
              <ReactApexChart
                options={state.options}
                series={state.series}
                type="bar"
                height={400}
              />
            </div>
          </div>
        </div>
        <div style={{height:"auto"}} className="col-md-4 ">
          <div  className="bar-chart-wraper ">

          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
