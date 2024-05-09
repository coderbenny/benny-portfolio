import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Blog from "../pages/Blog";
import ContactMe from "../pages/ContactMe";
import Projects from "../pages/Projects";
import Resume from "../pages/Resume";

function CustomTabPanel(props) {
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

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Projects" {...a11yProps(0)} />
          <Tab label="Resume" {...a11yProps(1)} />
          <Tab label="Contact ME" {...a11yProps(2)} />
          <Tab label="Blog" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Projects />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Resume />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <ContactMe />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Blog />
      </CustomTabPanel>
    </Box>
  );
}
