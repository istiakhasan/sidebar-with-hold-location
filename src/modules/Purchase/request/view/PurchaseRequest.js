import React from "react";
import { useLocation, useParams } from "react-router-dom";
import MainLayout from "../../../../common/MainLayout";

const PurchaseRequest = () => {
  const params = useParams();
  const location = useLocation();
  let content=[]

  for (let i = 0; i < 100; i++) {
    content.push(<h6>purchase request=${i} </h6>)
  }

  return <>{content}</>;
};

export default PurchaseRequest;
