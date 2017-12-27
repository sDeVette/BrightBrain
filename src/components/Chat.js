import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';

import Person from 'material-ui-icons/PersonOutline';
import FaceIcon from 'material-ui-icons/Face';
import Chip from 'material-ui/Chip/Chip';
import Avatar from 'material-ui/Avatar/Avatar';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import grey from 'material-ui/colors/grey';

import Inbound from './Inbound';
import Outbound from './Outbound';
import Input from 'material-ui/Input/Input';
import Slide from 'material-ui/transitions/Slide';

const styles = theme => ({
  root: {
  },
  messages:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height:152,
    overflowY:'scroll',
    marginBottom:theme.spacing.unit,
  },
  chip: {
    transform: 'scale(0.8)',
  },
  chatBar: {
    width: '100%',
    background: grey[900],
    padding: theme.spacing.unit * 2,
  },
  chatInput: {
    width: `calc(100% - ${theme.spacing.unit * 4}px)`,
    borderRadius: 18,
    border:'1px solid white',

  },
  input: {
    margin:'0px 18px -1px 18px',
    width:'calc(100% - 36px)',
  }
});



class Game extends Component {
  constructor(props){
    super(props);
    this.state = {
      draft: '',
      messages:[
        {text: 'I think Donna is the hacker', type: 'inbound'},
        {text: 'I never trust redheads', type: 'inbound'},
        {text: 'Me neither!', type: 'inbound'},
        {text: 'Based on what!?', type: 'outbound'},
      ]
    };
  }

  handleChange = (event) => {
    this.setState({draft: event.target.value});
  }

  handleFocus = () => {
    scroll.scrollToTop();
  }

  postMessage = (e) => {
    e.preventDefault();
    let stateCopy = this.state;
    stateCopy.messages.push({text:this.state.draft, type:'outbound'});
    scroll.scrollToBottom({
      containerId: 'ContainerElementID',
      duration: 150,
    });
    this.setState(stateCopy,() => {
      this.setState({draft:''});
    });
  }

  //   <Chip
  //     avatar={
  //     <Avatar>
  //         <FaceIcon className={classes.svgIcon} />
  //     </Avatar>
  //     }
  //     label="Brian"
  //     className={classes.chip}
  // />

  render(){
    const { classes } = this.props;
    const { messages, draft } = this.state;
    return (
      <div className={classes.root}>
        <div className={classes.messages} id="ContainerElementID">
          {messages.map((message, index) => {
            console.log(message);
            if(message.type === 'inbound'){
              return(
                <Slide in={true} direction="left" key={index}>
                  <Inbound message={message} />
                </Slide>
              );
            } else if(message.type === 'outbound'){
              return(
                <Slide in={true} direction="right" key={index}>
                  <Outbound message={message} />
                </Slide>
              );
            }
          })}
        </div>
        <div className={classes.chatBar}>
          <form onSubmit={this.postMessage} className={classes.chatInput}>  
            <Input
              placeholder="Message..."
              className={classes.input}
              onFocus={this.handleFocus}
              onChange={this.handleChange}
              value={draft}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </form>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(Game);