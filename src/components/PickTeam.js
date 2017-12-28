import React, { Component } from 'react';
import { connect } from "react-redux";
import { withStyles } from 'material-ui/styles';
import { addPlayerToNode } from "../actions";
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

class PickTeam extends Component {
  constructor(props){
    super(props);
    this.state = {
      players: [
        {
          id: 1,
          name: 'Angie',
          color: red,
          selected: false,
        },{
          id: 2,
          name: 'Brian',
          color: blue,
          selected: false,
        },{
          id: 3,
          name: 'Carl',
          color: yellow,
          selected: false,
        },{
          id: 4,
          name: 'Donna',
          color: purple,
          selected: false,
        },{
          id: 5,
          name: 'Eric',
          color: green,
          selected: false,
        }
      ],
      checked: 0,
      teamSizeForRound: 3,
    };
  }

  countChecked = () => {
    let count = 0;
    this.state.players.map((player, index) => {
      
    })
  }

  handleToggle = (id) => (event) => {
    let {game, players} = this.props;
    console.log(game);
    if(this.state.checked < game.nodes[game.currentNode].size || event.target.checked === false){
      let stateCopy = this.state;
      this.props.dispatch(addPlayerToNode(id));
      // stateCopy.players[id - 1].selected = event.target.checked;
      if(event.target.checked === false){
        stateCopy.checked--;
      } else {
        stateCopy.checked++;
      }
      this.setState(stateCopy);
    }
  }
  
  render(){
    
    const { classes, players } = this.props;
    // const { players } = this.state;
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
const mapStateToProps = (state) => {
	return {
		players : state.players.players,
    user : state.user.user,
    game : state.game,
	};
};
PickTeam = connect(mapStateToProps)(withStyles(styles)(PickTeam));
export default PickTeam;