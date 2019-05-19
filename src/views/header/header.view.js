import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import PersonIcon from '@material-ui/icons/Person'
import { withStyles } from '@material-ui/core'

import headerStyle from './header.style'

class HeaderView extends Component {
  render() {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              React Demo
            </Typography>
            <PersonIcon />
            <div className={classes.userName}>Developer</div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}

export default withStyles(headerStyle)(HeaderView)
