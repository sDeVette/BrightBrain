import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';

const styles = theme => ({
  root: {
    
  }
});

class Inbound extends Component {
  render(){
    const { classes, message } = this.props;
    return(
      <div className={classes.root}>
        <Typography color="secondary">
          {message.text}
        </Typography>
      </div>
    );
  }
}
  
export default withStyles(styles)(Inbound);