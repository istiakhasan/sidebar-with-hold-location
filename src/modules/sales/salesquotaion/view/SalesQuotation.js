import React, { useState } from "react";
import MainLayout from "../../../../common/MainLayout";
import Calendar from "react-calendar";
import "./salesquotation.css";

const SalesQuotation = () => {
  const [value, onChange] = useState(new Date());

  return (
    <MainLayout>
      <Calendar className={"is-custom"} onChange={onChange} value={value} />
    </MainLayout>
  );
};

export default SalesQuotation;
