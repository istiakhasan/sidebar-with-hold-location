import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import SalesApproveLanding from "./table/SalesApproveLanding";

const SalesApproveTabs = () => {
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="sales_order_list">
        <Tab title="Sales Order List" eventKey={"sales_order_list"}>
            <SalesApproveLanding />
        </Tab>
      </Tabs>
    </div>
  );
};

export default SalesApproveTabs;
