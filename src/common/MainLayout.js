import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "300px" }}>
        <Sidebar />
      </div>
      <div style={{ flex: "1", paddingLeft: "50px",minHeight:"100vh" }}>{children}</div>
    </div>
  );
};

export default MainLayout;
