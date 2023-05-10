import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import SalesDeliveryLanding from "./table/SalesDeliveryLanding";

const SalesDeliveryTabs = () => {
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="sales_delivery_list">
        <Tab title="Sales Delivery List" eventKey={"sales_delivery_list"}>
          <SalesDeliveryLanding />
        </Tab>
      </Tabs>
    </div>
  );
};

export default SalesDeliveryTabs;
