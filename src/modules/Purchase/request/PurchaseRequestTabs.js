import { Button } from "@mui/material";
import React from "react";
import { Tab, Tabs } from "react-bootstrap";

const PurchaseRequestTabs = () => {
  return (
    <div style={{position:"relative"}}>
      <Tabs
        defaultActiveKey="home"
        transition={false}
        id="noanim-tab-example"
        className="mb-3"
      >
        <Tab eventKey="home" title="Home">
          <div style={{position:"absolute",top:"0",right:"0"}} className="d-flex justify-content-end ">
            <Button variant="contained">Add</Button>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          <h5>2</h5>
        </Tab>
      </Tabs>
    </div>
  );
};

export default PurchaseRequestTabs;
