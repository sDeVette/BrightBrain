import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';
import List, { ListItem, ListItemSecondaryAction, ListItemText } from 'material-ui/List';
import Avatar from 'material-ui/Avatar/Avatar';
import ListItemIcon from 'material-ui/List/ListItemIcon';

import Info from 'material-ui-icons/InfoOutline';
import No from 'material-ui-icons/AssignmentLate';
import Yes from 'material-ui-icons/AssignmentTurnedIn';

import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import yellow from 'material-ui/colors/yellow';
import green from 'material-ui/colors/green';

const styles = theme => ({
  votes: {
    display: 'flex',
    width: '100%',
  },
  vote: {
    flex: '1 0', 
    textAlign: 'center',
    color: theme.palette.common.white,
    fontSize:11,
  },
});

class ChartHeader extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  
  render(){
    
    const { classes } = this.props;
    return(
      <ListItem>
        <ListItemIcon>
          <Info/>
        </ListItemIcon>
        <div className={classes.votes}>
          <div className={classes.vote}>
            Node: 1
          </div>
          <div className={classes.vote}>
            Node: 2
          </div>
          <div className={classes.vote}>
            Node: 3
          </div>
          <div className={classes.vote}>
            Node: 4
          </div>
          <div className={classes.vote}>
            Node: 5
          </div>
        </div>
      </ListItem>
    );
  }
}
  
export default withStyles(styles)(ChartHeader);