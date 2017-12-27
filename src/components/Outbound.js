import React, { Component } from 'react';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography/Typography';

import Message from './Message';

const styles = theme => ({
  inBound: {
    border:`1px solid ${theme.palette.primary[200]}`,
    borderRadius:'10px 10px 0px 10px',
    alignSelf: 'flex-end',
    background: 'rgba(0,0,0,0.2)',
    marginLeft: theme.spacing.unit,
    marginTop: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 1.5,
    paddingTop: theme.spacing.unit / 2,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit / 2,
  }
});

class Inbound extends Component {
  render(){
    const { classes, message } = this.props;
    return(
      <div className={classes.inBound}>
        <Message message={message}/>
      </div>
    );
  }
}
  
export default withStyles(styles)(Inbound);