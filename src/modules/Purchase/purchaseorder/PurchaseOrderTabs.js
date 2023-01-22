import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import PurchaseOrderForm from "./form/PurchaseOrderForm";
import PurchaseOrderLanding from "./landing/PurchaseOrderLanding";
const PurchaseOrderTabs = () => {
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="purchase_order_list">
        <Tab title="Purchase Order List" eventKey={"purchase_order_list"}>
          <PurchaseOrderLanding />
        </Tab>
        <Tab title="Purchase Order" eventKey={"purchase_order"}>
            <PurchaseOrderForm />
        </Tab>
      </Tabs>
    </div>
  );
};

export default PurchaseOrderTabs;
