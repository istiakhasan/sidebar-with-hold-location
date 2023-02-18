import React from "react";


const DashboardTimeline = () => {
  return (
    <div className="d-flex flex-column  justify-content-between h-100">
      <div
        style={{ borderBottom: ".5px solid gray" }}
        className="d-flex justify-content-between align-items-center"
      >
        <p className="text-secondary">Income</p>
        <span>+</span>
      </div>

      <div
        className="d-flex shadow shadow-lg  flex-column align-items-center justify-content-center"
        style={{
          border: "15px solid  #76ABAA",
          height: "200px",
          width: "200px",
          borderRadius: "50%",
          margin: "0 auto",
        }}
      >
        <p className="text-secondary  m-0" style={{ fontSize: "18px" }}>
          Percent
        </p>
        <p style={{ fontSize: "3rem" }} className="m-0 p-0">
          75
        </p>
      </div>

      <div>
        <div
          style={{ color: "goldenrod" }}
          className="d-flex align-items-center "
        >
          <span style={{ color: "goldenrod", fontSize: "28px" }}>32 %</span>
          <hr
            style={{ height: "6px", background: "goldenrod" }}
            className="flex-grow-1 ms-2"
          />
        </div>
        <p className="text-secondary">Spendings Terget</p>
      </div>
    </div>
  );
};

export default DashboardTimeline;
