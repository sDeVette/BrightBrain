import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import Typography from 'material-ui/Typography/Typography';


import Person from 'material-ui-icons/Person';

const styles = theme => ({
  root: {
    display:'flex',
  }
});

class Message extends Component {
  render(){
    const { classes, message, players } = this.props;
    console.log(message);
    console.log(players);
    return(
      <div className={classes.root}>
        <Person style={{
          fill: players[message.id].color[600],
          marginRight:4, 
          marginTop:2, 
          height:16, 
          width:16
        }}/>
        <Typography color="secondary">
          {message.text}
        </Typography>
      </div>
    );
  }
}
  
// export default withStyles(styles)(Inbound);
const mapStateToProps = (state) => {
  return {
    players : state.players.players,
  };
};
Message = connect(mapStateToProps)(withStyles(styles)(Message));
export default Message;