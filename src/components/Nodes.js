import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from "react-redux";
import Stepper, { Step, StepLabel, StepContent } from 'material-ui/Stepper';
import Typography from 'material-ui/Typography';

import Message from './Message';
import StepButton from 'material-ui/Stepper/StepButton';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import PickTeam from './PickTeam';

import Person from 'material-ui-icons/PersonOutline';

import blue from 'material-ui/colors/blue';
import red from 'material-ui/colors/red';
import yellow from 'material-ui/colors/yellow';
import green from 'material-ui/colors/green';
import purple from 'material-ui/colors/purple';

const styles = theme => ({
  root: {
    height: 'calc(100vh - 383px)',
    overflowY: 'scroll',
  }
});

class Nodes extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeStep: 0,
      lastNode: 3,
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
      ],
      nodes: [
        {id: 1, status: true, players:[]},
        {id: 2, status: false, players: []},
        {id: 3, status: false, players: []},
        {id: 4, status: false, players:[]},
        {id: 5, status: false, players:[]},
      ]
    };
  }

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  render(){
    const { classes, players, user, game } = this.props;
    const { activeStep, lastNode, nodes } = this.state;
    return(
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {nodes.map((node, index) => {
            
            return(
              <Step key={index} completed={node.status}>
                <StepButton onClick={this.handleStep(index)}>Node: {node.id}</StepButton>
                <StepContent>
                  {
                    user.id === game.pickingPlayer && <PickTeam/> ||
                    node.players.map((id, index) => {
                      console.log(id, lastNode);
                      return(
                        <ListItem key={index}>
                          <ListItemIcon>
                            <Person style={{fill: players[id-1].color[600]}}/>
                          </ListItemIcon>
                          <ListItemText primary={players[id-1].name}/>
                        </ListItem>
                      )
                    })
                  }
                </StepContent>
              </Step>
            );
          
          })}
        </Stepper>
      </div>
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
Nodes = connect(mapStateToProps)(withStyles(styles)(Nodes));
export default Nodes;