import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
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

const styles = theme => ({
  
});

class Players extends Component {
  constructor(props){
    super(props);
    console.log(props);
    // this.state = {
    //   players: [
    //     {
    //       id: 1,
    //       name: 'Angie',
    //       color: red,
    //       votes: [1,1,1,null,null],
    //     },{
    //       id: 2,
    //       name: 'Brian',
    //       color: blue,
    //       votes: [1,0,1,null,null],
    //     },{
    //       id: 3,
    //       name: 'Carl',
    //       color: yellow,
    //       votes: [1,0,0,null,null],
    //     },{
    //       id: 4,
    //       name: 'Donna',
    //       color: purple,
    //       votes: [1,0,1,null,null],
    //     },{
    //       id: 5,
    //       name: 'Eric',
    //       color: green,
    //       votes: [1,1,1,null,null],
    //     }
    //   ],
    // };
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
            </ListItem>
          );
        })}
      </List>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players : state.players.players
  };
};
Players = connect(mapStateToProps)(withStyles(styles)(Players));
export default Players;