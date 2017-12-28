import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from "react-redux";
import { setPlayers, clearPlayers, setUser, setPicker } from "../actions";
import { ListItem, ListItemIcon, ListItemText, } from 'material-ui/List';
import SwipeableViews from 'react-swipeable-views';
import AppBar from 'material-ui/AppBar';
import Tabs, { Tab } from 'material-ui/Tabs';

import { getUser, playersJoined, subscribeToChat, sendMessage, gameStart, pickTeam } from '../api';

import Person from 'material-ui-icons/PersonOutline';

import Chat from './Chat';
import Chart from './Chart.js';
import Nodes from './Nodes.js';
import Players from './Players.js';

import PickTeam from './PickTeam.js';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    height: 'calc(100vh - 56px)',
  }),
});

class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      value: 0,
    }
  }
  
  componentWillMount(){
    playersJoined((err, players) => {
      this.props.dispatch(setPlayers(players));
      console.log(this.props);
    });
  
    
  
    getUser((err, users) => {
      console.log(users);
      // this.props.dispatch(setPlayers(users));
      this.props.dispatch(setUser(users));
      this.setState({players: users, user:users[users.length - 1]});
    });

    gameStart((err, time) => {
      console.log(time);
    });

    pickTeam((err, id) => {
      this.setState({value: 1});
      this.props.dispatch(setPicker(id));
    });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };



  render(){
    // style={{fill: user.color[600]}}
    const { classes, user } = this.props;
    console.log(this.props.user);
    return (
      <div>
        <ListItem dense>
          <ListItemIcon>
            <Person style={{fill: user.color['600']}}/>
          </ListItemIcon>
          <ListItemText primary={user.name} secondary='Steve de Vette'/>
        </ListItem>
        <Chat/>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor="primary"
            textColor="primary"
            fullWidth
          >
            <Tab label="Votes" />
            <Tab label="Nodes" />
            <Tab label="Players" />
          </Tabs>
        </AppBar>
        <SwipeableViews index={this.state.value} onChangeIndex={this.handleChangeIndex}>
          <Chart/>
          <Nodes/>
          <Players/>
        </SwipeableViews>
      </div>
    );
  }
}
  
// <Grid className={classes.root} spacing={0} container>
//   <Grid item xs={12}>
//   </Grid>  
//   <Typography type="headline" component="h3">
//   This is a sheet of paper.
//   </Typography>
//   <Typography component="p">
//   Paper can be used to build surface or other elements for your application.
//   </Typography>
// </Grid>
const mapStateToProps = (state) => {
	return {
		players : state.players,
		user : state.user.user
	};
};
Game = connect(mapStateToProps)(withStyles(styles)(Game));
export default Game;