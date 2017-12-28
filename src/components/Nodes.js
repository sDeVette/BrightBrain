import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
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

class Inbound extends Component {
  constructor(props){
    super(props);
    this.state = {
      activeStep: 3,
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
        {id: 1, status: true, players:[1,2]},
        {id: 2, status: false, players: [2, 3, 4]},
        {id: 3, status: false, players: [3,5]},
        {id: 4, status: false, players:[]},
        {id: 5, status: false, players:[]},
      ]
    };
  }

  handleStep = step => () => {
    console.log(step);
    this.setState({
      activeStep: step,
    });
  };

  render(){
    const { classes } = this.props;
    const { activeStep, lastNode, nodes, players } = this.state;
    return(
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep} orientation="vertical">
          {nodes.map((node, index) => {
            
            return(
              <Step key={index} completed={node.status}>
                <StepButton onClick={this.handleStep(index)}>Node: {node.id}</StepButton>
                <StepContent>
                  {
                    activeStep === lastNode && <PickTeam/> ||
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
  
export default withStyles(styles)(Inbound);