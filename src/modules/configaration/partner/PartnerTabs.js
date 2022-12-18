import React from "react";
import MainLayout from "../../../common/MainLayout";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import PartnerLanding from "./landing/PartnerLanding";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index = 0) {
  return {
    id: `simple-tab-${"0"}`,
    "aria-controls": `simple-tabpanel-${"0"}`,
  };
}

const PartnerTabs = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{ position: "relative" }} className=" ">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        <Tab
          className="text-white"
          label={<p style={{ color: "black",fontWeight:"bold" }}>Partner</p>}
          {...a11yProps(0)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <PartnerLanding />
      </TabPanel>
    </div>
  );
};

export default PartnerTabs;
