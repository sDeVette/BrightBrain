import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from "react-redux";
import Typography from 'material-ui/Typography';

import Person from 'material-ui-icons/PersonOutline';
import FaceIcon from 'material-ui-icons/Face';
import Chip from 'material-ui/Chip/Chip';
import Avatar from 'material-ui/Avatar/Avatar';

import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

import { getUser, subscribeToChat, sendMessage } from '../api';

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



class Chat extends Component {
  constructor(props){
    super(props);
    this.state = {
      draft: '',
      messages:[
      ]
    };
    subscribeToChat((err, message) => {
      this.saveMessage(message, 'inbound');
    });
  }

  

  handleChange = (event) => {
    this.setState({draft: event.target.value});
  }

  handleFocus = () => {
    scroll.scrollToTop();
  }

  postMessage = (e) => {
    e.preventDefault();
    this.pushMessage(this.state.draft, 'outbound');
  }

  pushMessage = (message, type) => {
    console.log(message);
    console.log(this.props);
    let body = {text: message, id:this.props.user.user.id};
    sendMessage(body);
    this.saveMessage(body, type);
  }

  saveMessage = (message, type) => {
    let stateCopy = this.state;
    stateCopy.messages.push({text:message.text, id: message.id, type: type});
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

const mapStateToProps = (state) => {
  return {
    players : state.players.players,
    user : state.user
  };
};
Chat = connect(mapStateToProps)(withStyles(styles)(Chat));
export default Chat;