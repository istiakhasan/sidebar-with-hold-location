import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import OfficeCreateForm from "./form/OfficeCreateForm";
import OfficeLanding from "./landing/OfficeLanding";

const OfficeTabs = () => {
  document.title = "Office";
  return (
    <div style={{ position: "relative" }}>
      <Tabs className="mb-3" defaultActiveKey="Office">
        <Tab title="Office List" eventKey={"Office"}>
          <OfficeLanding />
        </Tab>
        <Tab title="Create Office" eventKey={"craete_osadfffice"}>
          <OfficeCreateForm />
        </Tab>
      </Tabs>
    </div>
  );
};

export default OfficeTabs;
