import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const SecondLayer = ({ child }) => {
  

  return (
    <>
      <Link to={child?.path}>{child.title}</Link> <br />
    </>
  );
};

export default SecondLayer;
