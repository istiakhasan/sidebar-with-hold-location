import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import InventoryReportTable from "./table/InventoryReportTable";

const InventoryReportTabs = () => {
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="inventory_report">
        <Tab title="Inventory Reports" eventKey={"inventory_report"}>
          <InventoryReportTable />
        </Tab>
      </Tabs>
    </div>
  );
};

export default InventoryReportTabs;
