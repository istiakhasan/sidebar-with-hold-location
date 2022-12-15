import React from "react";
import Sidebar from "./Sidebar/Sidebar";
import TopMenuBar from "./TopMenu/TopMenuBar";

const MainLayout = ({ children }) => {
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex:1000
      }}
    >
      <div
        style={{
          width: "100%",
          height: "10vh",
        }}
      >
        <TopMenuBar />
      </div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "250px" }}>
          <Sidebar />
        </div>
        <div
          className="custom-scroll"
          style={{
            flex: "1",
            paddingLeft: "35px",
            marginTop: "20px",
            overflow: "scroll",
            height: "100vh",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
