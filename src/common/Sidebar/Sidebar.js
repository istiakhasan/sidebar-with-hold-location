import React, {  useState } from "react";
import { sidebarData } from "../../data/data";
import "./Sidebar.css";
import SidebarChildNode from "./SidebarChildNode";

export const Sidebar = () => {
  const [click, setIsClick] = useState();
  return (
    <div
      className="custom-scroll"
      style={{
        width: "250px",
        background: "#eaf6f6",
        position: "fixed",
        height: "90vh",
        padding: "8px 15px",
        overflow: "scroll",
        bottom:0
      }}
    >
      <div>
        {sidebarData.map((item, index) => (
          <SidebarChildNode
            click={click}
            data={sidebarData}
            setClick={setIsClick}
            index={index}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
