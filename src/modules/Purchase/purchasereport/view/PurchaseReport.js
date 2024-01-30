import React from "react";
import { useState } from "react";

const PurchaseReport = () => {
  const [hierarcyTree, sethierarcyTree] = useState([
    {
      id: 1,
      child: [
        {
          id: 2,
          child: [],
        },
      ],
    },
  ]);
  const handleClick = () => {
    const newObj = { id: Math.floor(100000 + Math.random() * 900000) };
    sethierarcyTree([...hierarcyTree, newObj]);
  };
  return (
    <div className=" d-flex">
      {hierarcyTree?.map((item, i) => (
        <>
          <span
            onClick={() => handleClick(item?.i)}
            className="d-flex align-items-center justify-content-center me-3"
            style={{
              display: "inline-block",
              height: "100px",
              width: "100px",
              background: "pink",
            }}
          >
            +
          </span>
        </>
      ))}
    </div>
  );
};

export default PurchaseReport;
