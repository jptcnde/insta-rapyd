import React from 'react';
import PropTypes from 'prop-types';
import { Typography, Fade, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: 1,
    position: 'absolute',
    bottom: 6,
    margin: 0,
    left: 0,
    width: '100%',
    color: theme.palette.common.white,
    backgroundColor: 'rgba(49, 49, 49, .8)',
    borderRadius: 0,
    padding: theme.spacing(1)
  }
}))

function PhotoDescriptionBar(props) {
  const { open, desc } = props;
  const classes = useStyles();
  return (
    <Fade

      direction="up" in={open} mountOnEnter unmountOnExit>
      <Paper className={classes.root}>
        <Typography color="inherit" variant="caption">
          {desc}
        </Typography>
      </Paper>
    </Fade>
  )
}

PhotoDescriptionBar.propTypes = {
  open: PropTypes.bool.isRequired,
  desc: PropTypes.string.isRequired,
};

export default PhotoDescriptionBar;