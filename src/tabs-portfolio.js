import React from 'react';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import AppBarExampleIcon from './appbar';
import ArtCards from './portfolio/art';
import ScienceCards from './portfolio/science';
import MathCards from './portfolio/math';
import SoftwareCards from './portfolio/software';
import MusicCards from './portfolio/music';
import OverviewCard from './portfolio/overview';
import Tab from './tabs';
import Paper from 'material-ui/Paper';
import Link from './links';
import Countdown from './project cards/Countdown';
import Mandelbroot from './project cards/Mandelbroot';
import Paper from 'material-ui/Paper';

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 5,
  },
  paper: {
  height: 5,
  margin: 20,
  textAlign: 'center',
  display: 'inline-block',},
};


export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
    };
  }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };
  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Overview" value={0} />
          <Tab label="Art" value={1} />
          <Tab label="Science" value={2} />
          <Tab label="Software" value={3} />
          <Tab label="Applied math" value={4} />
          <Tab label="Music" value={5} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <OverviewCard />
          </div>
          <div style={styles.slide}>
            <ArtCards />
          </div>
          <div style={styles.slide}>
            <ScienceCards />
          </div>
          <div style={styles.slide}>
            <SoftwareCards/>
          </div>
          <div style={styles.slide}>
            <MathCards/>
          </div>
          <div style={styles.slide}>
            <MusicCards/>
          </div>
        </SwipeableViews>
        
      </div>
    );
  }
}