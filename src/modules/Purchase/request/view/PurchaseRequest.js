import React from "react";

const PurchaseRequest = () => {
  let content = [];

  for (let i = 0; i < 100; i++) {
    content.push(<h6 key={i}>purchase request=${i} </h6>);
  }

  return <>{content}</>;
};

export default PurchaseRequest;
