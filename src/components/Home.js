import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid/Grid';
import Paper from 'material-ui/Paper/Paper';
import Button from 'material-ui/Button/Button';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    height: 'calc(100vh - 56px)',
  }),
  centerText: {
    textAlign: 'center',
  },
});

class Game extends Component {
  constructor(props){
    super(props);

  }


  render(){
    const { classes } = this.props;
    return (
      <Grid className={classes.root} spacing={0} container>
        <Grid item xs={12}>
          
          <div className={classes.centerText}>
            <Typography type="headline" component="h3">
              BrightMind
            </Typography>
            <Typography component="p">
              let he who is without sin cast the first stone
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4}><Button raised color="secondary">Login</Button></Grid>
        <Grid item xs={4}><Button raised color="primary">Create</Button></Grid>
        <Grid item xs={4}><Button raised color="accent">Play</Button></Grid>
      </Grid>
    );
  }
}


export default withStyles(styles)(Game);