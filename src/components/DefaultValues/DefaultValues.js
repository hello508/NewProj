import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import TabContainer from '../TabContainer'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 500,
  },
})

const DefaultValues = (props) => {
  const { classes } = props
  return (
    <TabContainer>
      <form className={classes.container}>
        <label>Email Configuration</label>
        <TextField
          label="TO"
          className={classes.textField}
          fullWidth
          //value={selectedRow['companyName'] || ''}
          margin="normal"
        />
        <TextField
          label="From"
          className={classes.textField}
          //value={selectedRow['jobType'] || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Template Version"
          className={classes.textField}
          //value={selectedRow['jobType'] || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="CC"
          className={classes.textField}
          //value={selectedRow['jobType'] || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="BCC"
          className={classes.textField}
          //value={selectedRow['jobType'] || ''}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Subject"
          className={classes.textField}
          //value={selectedRow['jobType'] || ''}
          fullWidth
          margin="normal"
        />
      </form>
    </TabContainer>
  )
}

DefaultValues.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(DefaultValues)
