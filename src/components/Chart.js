import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar/Avatar';
import ListItemIcon from 'material-ui/List/ListItemIcon';

import Person from 'material-ui-icons/PersonOutline';
import No from 'material-ui-icons/AssignmentLate';
import Yes from 'material-ui-icons/AssignmentTurnedIn';

import ChartHeader from './ChartHeader.js';
import PlayerVotes from './PlayerVotes.js';

import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import yellow from 'material-ui/colors/yellow';
import green from 'material-ui/colors/green';
import purple from 'material-ui/colors/purple';

const styles = theme => ({
  root: {
    
  },
  player1: {
    fill: blue[500],
  },
  player2: {
    fill: red[500],
  },
  player3: {
    fill: yellow[500],
  },
  player4: {
    fill: green[500],
  },
  votes: {
    display: 'flex',
    width: '100%',
  },
  vote: {
    flex: '1 0', 
    textAlign: 'center',
  },
  yes: {
    fill: green[200],
  },
  no: {
    fill: red[200],
  }
});

class Chart extends Component {
  constructor(props){
    super(props);

    this.state = {
      players: [
        {
          id: 1,
          name: 'Angie',
          color: red,
          votes: [1,1,1,null,null],
        },{
          id: 2,
          name: 'Brian',
          color: blue,
          votes: [1,0,1,null,null],
        },{
          id: 3,
          name: 'Carl',
          color: yellow,
          votes: [1,0,0,null,null],
        },{
          id: 4,
          name: 'Donna',
          color: purple,
          votes: [1,0,1,null,null],
        },{
          id: 5,
          name: 'Eric',
          color: green,
          votes: [1,1,1,null,null],
        }
      ]
    };
  }
  
  render(){
    const { classes } = this.props;
    const { players } = this.state;
    return(
      <div className={classes.root}>
        <List>
          <ChartHeader/>
          {players.map((player, index) => {
            return(<PlayerVotes {...player} key={index}/>);
          })}
        </List>
      </div>
    );
  }
}
  
export default withStyles(styles)(Chart);