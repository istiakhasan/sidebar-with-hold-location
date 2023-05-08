import React, { useRef } from "react";

import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../firebase.config/firebase.config";
import HomeCard from "./HomeCard";
import ReactApexChart from "react-apexcharts";
import DashboardTimeline from "./DashboardTimeline";

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
      <div className="row mt-2">
        <div style={{ height: "auto" }} className="col-md-12 col-xl-8">
          <div style={{ height: "100%" }} className=" bar-chart-wraper">
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
        <div style={{ height: "auto" }} className="col-md-12 col-xl-4  ">
          <div
            style={{ height: "100%", marginBottom: 0, paddingBottom: "0" }}
            className="bar-chart-wraper "
          >
            <DashboardTimeline />
          </div>
        </div>
        <div className="col-md-12 col-xl-8 mt-4 ">
          <div className="bar-chart-wraper table-responsive">
            <p className="text-secondary">Sales Overview :</p>
            <table className="w-100">
              <thead>
                <tr>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                  <td>2</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="col-md-12 col-xl-4 mt-4">
          <div className="bar-chart-wraper">
            <p >
              <img
              style={{height:"30px",width:"30px"}}
                src="https://w7.pngwing.com/pngs/731/105/png-transparent-computer-icons-task-management-virtual-assistant-symbol-symbol-miscellaneous-text-service.png"
                alt=""
              />
              <span style={{color:"#176E6D"}}>Tasks List</span>
            </p>
            <hr />
            <p className="d-flex">
              <input type="checkbox" />
              <span className="d-flex flex-column ms-4">
                <strong>Wash the car</strong>
                <small className="text-secondary mt-2">Wash the car</small>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeView;
