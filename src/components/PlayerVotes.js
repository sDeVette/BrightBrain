import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar/Avatar';
import ListItemIcon from 'material-ui/List/ListItemIcon';

import Person from 'material-ui-icons/PersonOutline';
import No from 'material-ui-icons/AssignmentLate';
import Yes from 'material-ui-icons/AssignmentTurnedIn';

import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import yellow from 'material-ui/colors/yellow';
import green from 'material-ui/colors/green';

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

class PlayerVotes extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render(){
    
    const { classes, color, votes } = this.props;
    return(
      <ListItem>
        <ListItemIcon>
          <Person style={{fill: color[600]}}/>
        </ListItemIcon>
        <div className={classes.votes}>
          {votes.map((vote, index) => {
            if(vote === 1){
              return(
                <div className={classes.vote} key={index}>
                  <Yes className={classes.yes}/>
                </div>
              );
            } else if(vote === 0){
              return(
                <div className={classes.vote} key={index}>
                  <No className={classes.no}/>
                </div>
              );
            } else {
              return(
                <div className={classes.vote} key={index}>
                  ...
                </div>
              );
            }
          })}
        </div>
      </ListItem>
    );
  }
}
  
export default withStyles(styles)(PlayerVotes);