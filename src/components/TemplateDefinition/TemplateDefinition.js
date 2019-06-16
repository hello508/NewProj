import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

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
  formControl: {
    width: '99%',
    height: '750px',
    margin: '10px',
  },
  templateBody: {
    margin: '10px',
  },
})

const TemplateDefinition = (props) => {
  const { classes } = props
  return (
    <div>
      <form className={classes.container}>
        <TextField
          label="Template Name"
          className={classes.textField}
          fullWidth
          //value={selectedRow['companyName'] || ''}
          margin="normal"
        />

        <TextField
          label="Template Version"
          className={classes.textField}
          //value={selectedRow['jobType'] || ''}
          margin="normal"
        />
      </form>
      <label className={classes.templateBody}>Body</label>
      <div>
        <textarea className={classes.formControl} rows="25" />
      </div>
    </div>
  )
}

TemplateDefinition.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(TemplateDefinition)
