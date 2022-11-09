import { Paper, Popper, Typography } from "@mui/material";
import React from "react";
import MainLayout from "../../../common/MainLayout";
import MonthlyInvolve from "../../../common/MonthlyInvolve";
import Involve from "../../../asset/images/involve-1.png";
import Involve2 from "../../../asset/images/involve-2.png";
import Involve3 from "../../../asset/images/involve-3.png";
import Involve4 from "../../../asset/images/involve-4.png";
import ReactApexChart from "react-apexcharts";

const HomeView = () => {
  const state = {
    series: [
      {
        name: "Net Profit",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      },
      {
        name: "Revenue",
        data: [76, 85, 101, 98, 87, 105, 91, 114, 94],
      },
      {
        name: "Free Cash Flow",
        data: [35, 41, 36, 26, 45, 48, 52, 53, 41],
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "55%",
          endingShape: "rounded",
          borderRadius: 0,
          width:"140px",
          innerWidth:"150px"
        },
        
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ["transparent"],
      },
      xaxis: {
        categories: [
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
        ],
      },
      yaxis: {
        title: {
          text: "$ (thousands)",
        },
      },
      fill: {
        opacity: 1,
      },
      tooltip: {
        y: {
          formatter: function (val) {
            return "$ " + val + " thousands";
          },
        },
      },
    },
  };
  return (
    <div className="container-fluid p-0">
      <MainLayout>
        <div>
          <p
            style={{ fontSize: "15px", fontWeight: "500", color: "#1d2939" }}
            className="m-0 p-0"
          >
            <small>Monthly Log</small>
          </p>
          <Typography variant="" component={"small"} className="m-0 p-0 mb-1">
            Result is shows from October
          </Typography>
        </div>

        <div className="container-fluid  p-0 row">
          <div className="col-lg-2">
            <MonthlyInvolve
              url={Involve}
              title={"Revenue"}
              amount={"5000"}
            ></MonthlyInvolve>
          </div>
          <div className="col-lg-2">
            <MonthlyInvolve
              url={Involve2}
              title={"Revenue"}
              amount={"5000"}
            ></MonthlyInvolve>
          </div>
          <div className="col-lg-2">
            <MonthlyInvolve
              url={Involve3}
              title={"Revenue"}
              amount={"5000"}
            ></MonthlyInvolve>
          </div>
          <div className="col-lg-2">
            <MonthlyInvolve
              url={Involve4}
              title={"Revenue"}
              amount={"5000"}
            ></MonthlyInvolve>
          </div>

          <Paper variant="outlined">
            <div className="col-md-8">
              <div id="chart">
                <ReactApexChart
                 
                  options={state.options}
                  series={state.series}
                  type="bar"
                  height={390}
                />
              </div>
            </div>
            <div className="col-md-4"></div>
          </Paper>
          <div className="col-md-6"></div>
        </div>
      </MainLayout>
    </div>
  );
};

export default HomeView;
