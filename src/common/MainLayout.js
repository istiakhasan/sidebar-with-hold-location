import React from "react";
import Sidebar from "./Sidebar/Sidebar";

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "300px" }}>
        <Sidebar />
      </div>
      <div style={{ flex: "1", padding: "20px" }}>{children}</div>
    </div>
  );
};

export default MainLayout;
