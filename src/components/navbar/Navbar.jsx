import React from 'react'
import GolfCourse from '@material-ui/icons/GolfCourse';
import { Toolbar, AppBar, Typography, Button, Link } from '@material-ui/core';

const Navbar = () => {
  return (
    <AppBar 
        position="static"
        color="primary"
    >
      <Toolbar>
          <GolfCourse /> 
          <Typography
            variant="h6"
          >
            Golf Score Tracker
          </Typography>          
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;