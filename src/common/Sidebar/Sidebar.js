import React, { useState } from "react";
import { sidebarData } from "../../data/data";
import "./Sidebar.css";
import SidebarChildNode from "./SidebarChildNode";

export const Sidebar = () => {
  const [click, setIsClick] = useState();
  return (
    <div className="custom-scroll sidebar-container-scroll">
      <div>
        {sidebarData.map((item, index) => (
          <SidebarChildNode
            click={click}
            data={sidebarData}
            setClick={setIsClick}
            index={index}
            key={index}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
