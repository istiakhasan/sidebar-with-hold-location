import React from "react";
import { useDispatch } from "react-redux";

import { Link } from "react-router-dom";

const SecondLayer = ({ child }) => {
  const dispatch = useDispatch();
  return (
    <div
      style={{ display: "flex", alignItems: "center", whiteSpace: "nowrap" }}
    >
      <i
        style={{ fontSize: "6px", marginRight: "12px" }}
        className="fa-solid fa-circle-dot"
      ></i>
      <Link
        to={child?.path}
        onClick={() => {
          if (window.innerWidth < 700) {
            dispatch({ type: "TOGGLE_AUTO" });
          }
        }}
      >
        {child.title}
      </Link>{" "}
      <br />
    </div>
  );
};

export default SecondLayer;
