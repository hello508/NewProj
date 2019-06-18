import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import TabContainer from '../TabContainer'
import defaultValuesStyles from './DefaultValues.style'

class DefaultValues extends Component {
  render() {
    const { classes } = this.props
    return (
      <TabContainer>
        <label>Email Configuration</label>
        <form className={classes.container}>
          <TextField
            label="TO"
            className={classes.textField}
            //value={selectedRow['companyName'] || ''}
            margin="normal"
          />
          <TextField
            label="From"
            className={classes.textField}
            //value={selectedRow['jobType'] || ''}
            margin="normal"
          />
          <TextField
            label="CC"
            className={classes.textField}
            //value={selectedRow['jobType'] || ''}
            margin="normal"
          />
          <TextField
            label="BCC"
            className={classes.textField}
            //value={selectedRow['jobType'] || ''}
            margin="normal"
          />
          <TextField
            label="Subject"
            className={classes.textField}
            //value={selectedRow['jobType'] || ''}
            margin="normal"
          />
        </form>
      </TabContainer>
    )
  }
}

export default withStyles(defaultValuesStyles)(DefaultValues)
