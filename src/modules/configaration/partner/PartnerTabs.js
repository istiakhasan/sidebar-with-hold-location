import React from "react";

import PartnerLanding from "./landing/PartnerLanding";
import { Tab, Tabs } from "react-bootstrap";

const PartnerTabs = () => {
  return (
    <div style={{ position: "relative" }} className=" ">
      <Tabs
        defaultActiveKey="partnerlist"
     
      >
        <Tab eventKey="partnerlist" title="Partner List">
          <PartnerLanding />{" "}
        </Tab>
      </Tabs>
    </div>
  );
};

export default PartnerTabs;
