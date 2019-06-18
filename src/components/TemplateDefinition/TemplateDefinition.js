import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'

import TabContainer from '../TabContainer'
import templateDefinitionStyles from './TemplateDefinition.style'

class TemplateDefinition extends Component {
  render() {
    const { classes } = this.props
    return (
      <TabContainer>
        <div className={classes.templateDefinitionContainer}>
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
      </TabContainer>
    )
  }
}

TemplateDefinition.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(templateDefinitionStyles)(TemplateDefinition)
