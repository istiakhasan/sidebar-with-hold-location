import React from 'react';
import { Tab, Tabs } from "react-bootstrap";
import PurchaseReveiveLanding from '../landing/PurchaseReveiveLanding';
const index = () => {
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="purchase_receive">
        <Tab title="Purchase Receive" eventKey={"purchase_receive"}>
          <PurchaseReveiveLanding />
        </Tab>
      </Tabs>
    </div>
  );
};

export default index;