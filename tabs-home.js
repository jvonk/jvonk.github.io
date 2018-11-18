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
import OverviewCard from './about me/overviewcard';
import ArtCard from './project cards/artcard';
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
    padding: 10,
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
          <Tab label="About Me" value={0} />
          <Tab label="Links" value={1} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          
          <div>
            <OverviewCard />
            <Paper style={styles.paper} zDepth={3} />
          </div>
          <div style={styles.slide}>
            <Link/>
          </div>
        </SwipeableViews>
        
      </div>
    );
  }
}