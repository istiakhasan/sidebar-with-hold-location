import React from "react";

import PartnerLanding from "./landing/PartnerLanding";
import { Tab, Tabs } from "react-bootstrap";

const PartnerTabs = () => {
  return (
    <div style={{ position: "relative" }} className=" ">
      <Tabs
        defaultActiveKey="partnerlist"
        id="justify-tab-example"
        className="mb-3"
      >
        <Tab eventKey="partnerlist" title="Partner List">
          <PartnerLanding />{" "}
        </Tab>
      </Tabs>
    </div>
  );
};

export default PartnerTabs;
