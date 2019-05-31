import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
})

const TextFields = (props) => {
  const { classes, selectedRow } = props
  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        label="Company Name"
        className={classes.textField}
        value={selectedRow && selectedRow['companyName']}
        margin="normal"
        disabled
      />

      <TextField
        label="Job Type"
        className={classes.textField}
        value={selectedRow && selectedRow['jobType']}
        margin="normal"
        disabled
      />
    </form>
  )
}

TextFields.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TextFields)
