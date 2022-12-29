import React from "react";
import { Tab, Tabs } from "react-bootstrap";

const ItemTab = () => {
  return (
    <div  className=" ">
      {/* <Tabs
        
          aria-label="basic tabs example"
        >
          <Tab
            className="text-white"
            label={
              <Typography style={{ color: "black", fontSize: "11px" }}>
                Partner List
              </Typography>
            }
            {...a11yProps(0)}
          />
        </Tabs>
  
        <TabPanel key={value} value={value} index={0}>
          <PartnerLanding />
        </TabPanel> */}
      <Tabs
    //   style={{border:"1px solid red"}}
        defaultActiveKey="profile"
        id="uncontrolled-tab-example"
        className="mb-3"
        mountOnEnter={true}
        unmountOnExit={true}
      >
        <Tab eventKey="home" title={<span style={{fontSize:"11px",marginLeft:"12px",border:"none"}}>Home</span>}>
          {/* <Sonnet /> */}
          <h1>1</h1>
        </Tab>
        <Tab eventKey="profile" title="Profile">
          {/* <Sonnet /> */}
          <h1>2</h1>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ItemTab;
