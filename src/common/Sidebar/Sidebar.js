import React, { useEffect, useState } from "react";
import { sidebarData } from "../../data/data";
import "./Sidebar.css";
import SidebarChildNode from "./SidebarChildNode";

export const Sidebar = () => {
  const [click, setIsClick] = useState();
  return (
    <div className="custom-scroll" style={{width:"300px",background:"#423F3E",position:"fixed",height:"100%",padding:"15px 18px",overflow:"scroll"}}>
      <div >
      {sidebarData.map((item,index) => (
        <SidebarChildNode click={click} data={sidebarData} setClick={setIsClick} index={index} key={item.id} item={item} />
      ))}
    </div>
    </div>
  );
};

export default Sidebar;




