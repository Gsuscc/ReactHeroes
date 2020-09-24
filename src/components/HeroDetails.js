import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { FrontPage } from "./FrontPage";
import { BackPage } from "./BackPage";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function HeroDetails(props) {
  console.log(props.location.state.hero);
  let hero = props.location.state.hero;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="heroDetailContainer">
      <FrontPage hero={hero} />
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="Biography" {...a11yProps(0)} />
            <Tab label="Appearance" {...a11yProps(1)} />
            <Tab label="Work" {...a11yProps(2)} />
            <Tab label="Connections" {...a11yProps(3)} />
            <Tab label="Power Stats" {...a11yProps(4)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <Biography props={hero} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Appearance props={hero} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Work props={hero} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Connections props={hero} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <PowerStats props={hero} />
        </TabPanel>
      </div>
      <BackPage hero={hero} />
    </div>
  );
}

const Biography = (props) => {
  const biography = props.props.biography;
  console.log(props);
  return (
    <div>
      <div>{biography["full-name"]}</div>
      <div>{biography["alter-egos"]}</div>
      <div>{biography["place-of-birth"]}</div>
      <div>{biography["first-appearance"]}</div>
      <div>{biography["publisher"]}</div>
      <div>{biography["alignment"]}</div>
    </div>
  );
};

const Appearance = (props) => {
  const appearance = props.props.appearance;
  return (
    <div>
      <div>Gender: {appearance["gender"]}</div>
      <div>Race: {appearance["race"]}</div>
      <div>Height: {appearance["height"][1]}cm</div>
      <div>Weight: {appearance["weight"][1]}kg</div>
      <div>Hair Color: {appearance["hair-color"]}</div>
      <div>Eye Color: {appearance["eye-color"]}</div>
    </div>
  );
};

const Work = (props) => {
  const work = props.props.work;
  return (
    <div>
      <div>Base Work: {work["base"]}</div>
      <div>Occupation: {work["occupation"]}</div>
    </div>
  );
};

const Connections = (props) => {
  const connections = props.props.connections;
  return (
    <div>
      <div>Group Affiliation: {connections["group-affiliation"]}</div>
      <div>Relatives: {connections["relatives"]}</div>
    </div>
  );
};

const PowerStats = (props) => {
  const powerStats = props.props.powerstats;
  return (
    <div>
      <div>Combat: {powerStats["combat"]}</div>
      <div>Durability: {powerStats["durability"]}</div>
      <div>Intelligence: {powerStats["intelligence"]}</div>
      <div>Power: {powerStats["power"]}</div>
      <div>Speed: {powerStats["speed"]}</div>
      <div>Strength: {powerStats["strength"]}</div>
    </div>
  );
};
