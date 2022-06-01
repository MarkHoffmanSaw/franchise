import { useState } from "react";
import { Typography, Tabs, Tab, Box } from "@mui/material";
import PropTypes from "prop-types";

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

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        "aria-controls": `simple-tabpanel-${index}`,
    };
}
const DescriptionTabs = ({
    companyDescr,
    franchDescr,
    quartersRequirements,
    buyersRequirements,
}) => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="Полное описание франшизы"
                >
                    <Tab label="Описание компании" {...a11yProps(0)} />
                    <Tab label="Описание франшизы" {...a11yProps(1)} />
                    <Tab label="Требования к помещению" {...a11yProps(2)} />
                    <Tab label="Требования к покупателям" {...a11yProps(3)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                {companyDescr}
            </TabPanel>
            <TabPanel value={value} index={1}>
                {franchDescr}
            </TabPanel>
            <TabPanel value={value} index={2}>
                {quartersRequirements}
            </TabPanel>
            <TabPanel value={value} index={3}>
                {buyersRequirements}
            </TabPanel>
        </Box>
    );
};
export default DescriptionTabs;
