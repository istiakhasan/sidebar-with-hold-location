import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import PoApproveLanding from "./landing/PoApproveLanding";

const PurchaseApproveTabs = () => {
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="po_approve">
        <Tab title="PO Approve" eventKey={"po_approve"}>
          <PoApproveLanding />
        </Tab>
      </Tabs>
    </div>
  );
};

export default PurchaseApproveTabs;
