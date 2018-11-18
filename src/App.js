import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Drawer from 'material-ui/Drawer';
import Divider from 'material-ui/Divider';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { render } from 'react-dom';
import Portfolio from './tabs-portfolio';
import AppBar from 'material-ui/AppBar';
import MenuItem from 'material-ui/MenuItem';
import PropTypes from 'prop-types';
import {Tabs, Tab} from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MyAwesomeReactComponent from './MyAwesomeReactComponent';
import Paper from 'material-ui/Paper';
import AppBarExampleIcon from './appbar';
import OverviewCard from './about me/overviewcard';
import ArtCard from './project cards/artcard';
import TabHome from './tabs-home';
import Link from './links';
import Countdown from './project cards/Countdown';
import Mandelbroot from './project cards/Mandelbroot';

const routes = [
  { path: '/',
    exact: true,
    main: () =>
      <MuiThemeProvider>
        <TabHome />
      </MuiThemeProvider>
  },
  { path: '/portfolio',
    main: () =>
      <MuiThemeProvider>
        <Portfolio />
      </MuiThemeProvider>
  },
  { path: '/other',
    main: () => <h2>Other</h2>
  }
];
const style = {
  margin: 12,
};

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {open:false};
  }
  
  getChildContext() {
    return {muiTheme: getMuiTheme(baseTheme)};
  }
  handleToggle() {
    this.setState({open: !this.state.open});
  }
  handleClose() { this.setState({open: false}); }

  render() {
    return (
      <div className="App">
        <header className="App-header">
      <Router>
        <div>
          <div id="drawer">
            <Drawer
              docked={false}
              open={this.state.open}
              onRequestChange={(open) => this.setState({open})}
            >
              <MenuItem><Link onClick={this.handleClose.bind(this)} to="/">Home</Link></MenuItem>
              <Divider />
              <MenuItem><Link onClick={this.handleClose.bind(this)} to="/portfolio">Portfolio</Link></MenuItem>
              <Divider />
              <MenuItem><Link onClick={this.handleClose.bind(this)} to="/other">Other</Link></MenuItem>
              <Divider />
            </Drawer>
          </div>
          <AppBar
            title="Johan Vonk's Website"
            onLeftIconButtonClick={this.handleToggle.bind(this)} />
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          <div style={{}}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </div>
        </div>
      </Router>
        </header>
      </div>
    );
  }
}
App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired,
};