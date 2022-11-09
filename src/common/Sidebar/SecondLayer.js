import React from "react";
import { Link } from "react-router-dom";

const SecondLayer = ({ child }) => {
  

  return (
    <div >
      <i style={{fontSize:"6px",marginRight:"12px"}} className="fa-solid fa-circle-dot"></i>
      <Link to={child?.path}>{child.title}</Link> <br />
    </div>
  );
};

export default SecondLayer;
