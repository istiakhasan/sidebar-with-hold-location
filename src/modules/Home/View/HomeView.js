import { Paper, Popper, Typography } from "@mui/material";
import React, { useRef } from "react";
import MainLayout from "../../../common/MainLayout";
import MonthlyInvolve from "../../../common/MonthlyInvolve";
import Involve from "../../../asset/images/involve-1.png";
import Involve2 from "../../../asset/images/involve-2.png";
import Involve3 from "../../../asset/images/involve-3.png";
import Involve4 from "../../../asset/images/involve-4.png";
import ReactApexChart from "react-apexcharts";
import { Formik } from "formik";

const HomeView = () => {
  const formRef = useRef();
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
          columnWidth: "40%",
          endingShape: "rounded",
          borderRadius: 0,
          width: "100px",
          innerWidth: "150px",
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
  let item = [];
  let obj = {};
  const calculateTotal = (values) => {
    obj = values;
    const totalField = Object.values(obj);
    let total = totalField.reduce((a, b) => Number(a) + Number(b), 0);
    formRef?.current?.setFieldValue("field3", total);
  };
  const calculateAverage = (v, field,isTrue) => {
    console.log(obj,"object",Object.keys(obj).length,+v)
   const average=+v / Object.keys(obj).length
   console.log(average,"average",console.log(obj))
    for(let field in obj){
      formRef?.current?.setFieldValue([field], average)
      console.log(field)
     }
   
  };

  return (
    <div className="">
      <MainLayout>
        <div className="global-wrappar-shadow">
          <div>
            <h1>Anywhere in your app!</h1>
            <Formik
              initialValues={{ field1: "", field2: "", field3: "" }}
              innerRef={formRef}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  alert(JSON.stringify(values, null, 2));
                  setSubmitting(false);
                }, 400);
              }}
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                setFieldValue,
                /* and other goodies */
              }) => (
                <form onSubmit={handleSubmit}>
                  <input
                    type="number"
                    name="field1"
                    // onChange={handleChange}
                    onChange={(e) => {
                      setFieldValue("field1", e.target.value);

                      calculateTotal({...values, field1:e.target.value});
                    }}
                    value={values.field1}
                  />
                  {errors.email && touched.email && errors.email}
                  <input
                    type="number"
                    name="field2"
                    onChange={(e) => {
                      setFieldValue("field2", e.target.value);

                      calculateTotal({...values, field2:e.target.value});
                    }}
                    // onChange={handleChange}
                    value={values.field2}
                  />

                  <input
                    type="number"
                    name="field3"
                    // onBlur={(e) => {
                    //   setFieldValue("field3", e.target.value);
                    //   const a = Object.keys(values);
                    //   const sliched = a.slice(0, a.length - 2);

                    //   sliched.forEach((item) =>
                    //     setFieldValue(item, e.target.value / sliched.length)
                    //   );
                    // }}
                    onChange={(e)=>{
                      setFieldValue("field3", e.target.value);
                      calculateAverage(e.target.value, "field3",false);
                    }}
                    // onBlur={handleBlur}
                    value={values.field3}
                  />
                </form>
              )}
            </Formik>
          </div>

          {/* <div>
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

         
            
              <div style={{background:"white",width:"90%",margin:"0 auto"}} id="chart">
                <ReactApexChart
                 
                  options={state.options}
                  series={state.series}
                  type="bar"
                  height={390}
                />
              </div>
           
         
       
          <div className="col-md-6"></div>
        </div> */}
        </div>
      </MainLayout>
    </div>
  );
};

export default HomeView;
