import React from 'react';
import {
  AppBar as MuiAppBar, Toolbar, Typography
} from '@material-ui/core';
import CameraIcon from '@material-ui/icons/Camera';

function AppBar() {
  return (
    <MuiAppBar position="relative">
      <Toolbar>
        <CameraIcon />
        &nbsp;&nbsp;
        <Typography variant="h6" color="inherit" noWrap>
          Insta Rapyd
        </Typography>
      </Toolbar>
    </MuiAppBar>
  )
}

export default AppBar;
