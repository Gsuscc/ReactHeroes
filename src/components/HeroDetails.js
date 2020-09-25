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
  let hero = props.location.state.hero;
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <div className="heroDetailContainer">
        <div className="card-margin">
          <FrontPage hero={hero} />
        </div>

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
        <div className="card-margin">
          <BackPage hero={hero} />
        </div>
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
  return (
    <div className="superHeroDetailedContainer">
      <span className="detailCategory">Full Name:</span>
      <div>{biography["full-name"]}</div>
      <span className="detailCategory">Alter Ego(s):</span>
      <div>{biography["alter-egos"]}</div>
      <span className="detailCategory">Place Of Birth:</span>
      <div>{biography["place-of-birth"]}</div>
      <span className="detailCategory">First Appearance:</span>
      <div>{biography["first-appearance"]}</div>
      <span className="detailCategory">Alignment:</span>
      <div>{biography["alignment"]}</div>
      <span className="detailCategory">Publisher:</span>
      <div>{biography["publisher"]}</div>
    </div>
  );
};

const Appearance = (props) => {
  const appearance = props.props.appearance;
  return (
    <div className="superHeroDetailedContainer">
      <span className="detailCategory">Gender:</span>
      <div>{appearance["gender"]}</div>
      <span className="detailCategory">Race:</span>
      <div>{appearance["race"]}</div>
      <span className="detailCategory">Height:</span>
      <div>{appearance["height"][1]}</div>
      <span className="detailCategory">Weight:</span>
      <div>{appearance["weight"][1]}</div>
      <span className="detailCategory">Hair Color:</span>
      <div>{appearance["hair-color"]}</div>
      <span className="detailCategory">Eye Color:</span>
      <div>{appearance["eye-color"]}</div>
    </div>
  );
};

const Work = (props) => {
  const work = props.props.work;
  return (
    <div className="superHeroDetailedContainer">
      <span className="detailCategory">Base Work:</span>
      <div>{work["base"]}</div>
      <span className="detailCategory">Occupation:</span>
      <div>{work["occupation"]}</div>
    </div>
  );
};

const Connections = (props) => {
  const connections = props.props.connections;
  return (
    <div className="superHeroDetailedContainer">
      <span className="detailCategory">Group Affiliation:</span>
      <div>{connections["group-affiliation"]}</div>
      <span className="detailCategory">Relatives:</span>
      <div>{connections["relatives"]}</div>
    </div>
  );
};

const PowerStats = (props) => {
  const powerStats = props.props.powerstats;
  return (
    <div className="superHeroDetailedContainer">
      <span className="detailCategory">Combat:</span>
      <div className="powerbar">
        <span style={{ width: `${powerStats["combat"]}%` }}>
          {powerStats["combat"]}
        </span>
      </div>
      <span className="detailCategory ">Durability:</span>
      <div className="powerbar">
        <span style={{ width: `${powerStats["durability"]}%` }}>
          {powerStats["durability"]}
        </span>
      </div>
      <pspan className="detailCategory ">Intelligence:</pspan>
      <div className="powerbar">
        <span style={{ width: `${powerStats["intelligence"]}%` }}>
          {powerStats["intelligence"]}
        </span>
      </div>
      <span className="detailCategory ">Power:</span>
      <div className="powerbar">
        <span style={{ width: `${powerStats["power"]}%` }}>
          {powerStats["power"]}
        </span>
      </div>
      <span className="detailCategory ">Speed:</span>
      <div className="powerbar">
        <span style={{ width: `${powerStats["speed"]}%` }}>
          {powerStats["speed"]}
        </span>
      </div>
      <span className="detailCategory ">Strength:</span>
      <div className="powerbar">
        <span style={{ width: `${powerStats["strength"]}%` }}>
          {powerStats["strength"]}
        </span>
      </div>
    </div>
  );
};
