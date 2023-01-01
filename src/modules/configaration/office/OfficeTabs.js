import React from "react";
import { Tab, Tabs } from "react-bootstrap";

const OfficeTabs = () => {
  document.title = "Office";
  return (
    <Tabs className="mb-3" defaultActiveKey="Office">
      <Tab title="Office List" eventKey={"Office"}></Tab>
      <Tab title="Create Office" eventKey={"craete_osadfffice"}></Tab>

    </Tabs>
  );
};

export default OfficeTabs;
