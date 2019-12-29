import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/styles';
import Copyright from './Copyright';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  }
}));

function AppFooter() {
  const classes = useStyles();
  return (
    <footer className={classes.root}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
      <Copyright />
    </footer>
  )
}

export default AppFooter;