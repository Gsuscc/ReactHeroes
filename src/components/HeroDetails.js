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
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
  console.log(props);
  console.log(props.location.state.hero);
  let hero = props.location.state.hero;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
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
      <div>
        <Link to="/">
          <Button variant="contained" color="primary">
            Homepage
          </Button>
        </Link>
      </div>
    </div>
  );
}

const Biography = (props) => {
  const biography = props.props.biography;
  console.log(props);
  return (
    <div className="superHeroDetailedContainer">
      <p className="detailCategory">Full Name:</p>
      <div>{biography["full-name"]}</div>
      <p className="detailCategory">Alter Ego(s):</p>
      <div>{biography["alter-egos"]}</div>
      <p className="detailCategory">Place Of Birth:</p>
      <div>{biography["place-of-birth"]}</div>
      <p className="detailCategory">First Appearance:</p>
      <div>{biography["first-appearance"]}</div>
      <p className="detailCategory">Alignment:</p>
      <div>{biography["alignment"]}</div>
      <p className="detailCategory">Publisher:</p>
      <div>{biography["publisher"]}</div>
    </div>
  );
};

const Appearance = (props) => {
  const appearance = props.props.appearance;
  return (
    <div className="superHeroDetailedContainer">
      <p className="detailCategory">Gender:</p>
      <div>{appearance["gender"]}</div>
      <p className="detailCategory">Race:</p>
      <div>{appearance["race"]}</div>
      <p className="detailCategory">Height:</p>
      <div>{appearance["height"][1]}</div>
      <p className="detailCategory">Weight:</p>
      <div>{appearance["weight"][1]}</div>
      <p className="detailCategory">Hair Color:</p>
      <div>{appearance["hair-color"]}</div>
      <p className="detailCategory">Eye Color:</p>
      <div>{appearance["eye-color"]}</div>
    </div>
  );
};

const Work = (props) => {
  const work = props.props.work;
  return (
    <div className="superHeroDetailedContainer">
      <p className="detailCategory">Base Work:</p>
      <div>{work["base"]}</div>
      <p className="detailCategory">Occupation:</p>
      <div>{work["occupation"]}</div>
    </div>
  );
};

const Connections = (props) => {
  const connections = props.props.connections;
  return (
    <div className="superHeroDetailedContainer">
      <p className="detailCategory">Group Affiliation:</p>
      <div>{connections["group-affiliation"]}</div>
      <p className="detailCategory">Relatives:</p>
      <div>{connections["relatives"]}</div>
    </div>
  );
};

const PowerStats = (props) => {
  const powerStats = props.props.powerstats;
  return (
    <div className="superHeroDetailedContainer">
      <p className="detailCategory">Combat:</p>
      <div className="powerbar">
        <span style={{ width: `${powerStats["combat"]}%` }}>
          {powerStats["combat"]}
        </span>
      </div>
      <p className="detailCategory ">Durability:</p>
      <div className="powerbar">
        <span style={{ width: `${powerStats["durability"]}%` }}>
          {powerStats["durability"]}
        </span>
      </div>
      <p className="detailCategory ">Intelligence:</p>
      <div className="powerbar">
        <span style={{ width: `${powerStats["intelligence"]}%` }}>
          {powerStats["intelligence"]}
        </span>
      </div>
      <p className="detailCategory ">Power:</p>
      <div className="powerbar">
        <span style={{ width: `${powerStats["power"]}%` }}>
          {powerStats["power"]}
        </span>
      </div>
      <p className="detailCategory ">Speed:</p>
      <div className="powerbar">
        <span style={{ width: `${powerStats["speed"]}%` }}>
          {powerStats["speed"]}
        </span>
      </div>
      <p className="detailCategory ">Strength:</p>
      <div className="powerbar">
        <span style={{ width: `${powerStats["strength"]}%` }}>
          {powerStats["strength"]}
        </span>
      </div>
    </div>
  );
};
