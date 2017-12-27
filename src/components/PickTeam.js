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
import purple from 'material-ui/colors/purple';
import green from 'material-ui/colors/green';
import Checkbox from 'material-ui/Checkbox/Checkbox';

const styles = theme => ({
  
});

class Players extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [
        {
          id: 1,
          name: 'Angie',
          color: red,
          selected: 0,
        },{
          id: 2,
          name: 'Brian',
          color: blue,
          selected: 0,
        },{
          id: 3,
          name: 'Carl',
          color: yellow,
          selected: 0,
        },{
          id: 4,
          name: 'Donna',
          color: purple,
          selected: 0,
        },{
          id: 5,
          name: 'Eric',
          color: green,
          selected: 0,
        }
      ],
    };
  }

  handleToggle = (value, id) => () => {
      console.log(value, id);
    let stateCopy = this.state;
    stateCopy.players[id - 1].selected = value;
  }
  
  render(){
    
    const { classes } = this.props;
    const { players } = this.state;
    return(
      <List>  
        {players.map((player, index) => {
          return(
            <ListItem key={index}>
              <ListItemIcon>
                <Person style={{fill: player.color[600]}}/>
              </ListItemIcon>
              <ListItemText primary={player.name}/>
              <ListItemSecondaryAction>
                <Checkbox
                  onChange={this.handleToggle(player.id)}
                  checked={player.selected}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
      </List>
    );
  }
}
  
export default withStyles(styles)(Players);