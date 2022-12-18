import React, { useState } from "react";
import { sidebarData } from "../../data/data";
import "./Sidebar.css";
import SidebarChildNode from "./SidebarChildNode";

export const Sidebar = () => {
  const [click, setIsClick] = useState();
  return (
    <div
      className="custom-scroll"
      style={{
        background: "#eaf6f6",

        height: "90vh",

        overflow: "scroll",
        bottom: 0,
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
