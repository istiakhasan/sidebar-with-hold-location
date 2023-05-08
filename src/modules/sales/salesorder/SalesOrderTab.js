import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import SalesOrderForm from "./form/SalesOrderForm";
import SalesOrderLanding from "./table/SalesOrderLanding";

const SalesOrderTab = () => {
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="sales_order_list">
        <Tab title="Sales Order List" eventKey={"sales_order_list"}>
           <SalesOrderLanding />
        </Tab>
        <Tab title="Sales Order" eventKey={"sales_order"}>
          <SalesOrderForm />
        </Tab>
      </Tabs>
    </div>
  );
};

export default SalesOrderTab;
