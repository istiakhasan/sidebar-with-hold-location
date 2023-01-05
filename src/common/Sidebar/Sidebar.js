import React, { useState } from "react";
import { useSelector } from "react-redux";
import { sidebarData } from "../../data/data";
import "./Sidebar.css";
import SidebarChildNode from "./SidebarChildNode";

export const Sidebar = () => {
  const [click, setIsClick] = useState();
  const {routelist}=useSelector(state=>state?.authReducer)
  return (
    <div className="custom-scroll sidebar-container-scroll">
      <div>
        {routelist?.map((item, index) => (
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
