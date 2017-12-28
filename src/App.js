import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';

import Game from './components/Game';
import Home from './components/Home';
import AppBar from 'material-ui/AppBar/AppBar';
import Toolbar from 'material-ui/Toolbar/Toolbar';
import IconButton from 'material-ui/IconButton/IconButton';

import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography/Typography';
import Button from 'material-ui/Button/Button';


import { subscribeToTimer } from './api';


const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    type: 'dark',
  },
  status: {
    danger: 'orange',
  },
});

const styles = {
  root: {
    display: 'flex',
    overflow: 'hidden',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  content: {
    width: '100%',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    height: 'calc(100% - 56px)',
    marginTop: 56,
    [theme.breakpoints.up('sm')]: {
      content: {
        height: 'calc(100% - 64px)',
        marginTop: 64,
      },
    },
  },
};

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      timestamp: 'no timestamp yet'
    };

    

    // subscribeToTimer((err, timestamp) => this.setState({ 
    //   timestamp 
    // }));
  }

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <MuiThemeProvider theme={theme}>
          <AppBar>
            <Toolbar>
              <IconButton>
                <MenuIcon/>
              </IconButton>
              <Typography type="title" color="inherit" className={classes.flex}>
                Brighn {this.state.timestamp}
              </Typography>
              <Button color="contrast">Login</Button>
            </Toolbar>
          </AppBar>
          <div className={classes.content}>
            <Game/>
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}
      
// <Game/>
export default withStyles(styles)(App);
