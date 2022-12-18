import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar/Sidebar";
import TopMenuBar from "./TopMenu/TopMenuBar";

const MainLayout = ({ children }) => {
  const { menuToggle } = useSelector((state) => state.CounterReducers);
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        zIndex: 1000,
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
        <div
          style={
            menuToggle
              ? { width: "250px", transition: "1s ease ",left:"0%", overflow: "hidden" }
              : {left:"-50%",width: 0,position:"relative", transition: "1s ease ", overflow: "hidden" }
          }
        >
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
