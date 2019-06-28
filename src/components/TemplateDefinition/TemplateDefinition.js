import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { getPreviewTemplateData, updateTemplateFieldsData } from '~/views/templates/templates.actions'

import TabContainer from '../TabContainer'
import templateDefinitionStyles from './TemplateDefinition.style'

const TemplateDefinition = ({ classes, previewRowData, updateTemplateFieldsData }) => {
  return (
    <TabContainer>
      <div className={classes.templateDefinitionContainer}>
        <form className={classes.container}>
          <TextField
            label="Template Name"
            className={classes.textField}
            value={previewRowData.templateName || ''}
            margin="normal"
          />
          <TextField
            label="Template Version"
            className={classes.textField}
            value={previewRowData.templateVersion || ''}
            margin="normal"
          />
          <TextField
            label="Tags"
            className={classes.textField}
            value={previewRowData.tags || ''}
            onChange={(e) => updateTemplateFieldsData('tags', e.currentTarget.value)}
            margin="normal"
          />
        </form>
        <label className={classes.templateBody}>Body</label>
        <div>
          <textarea
            className={classes.formControl}
            value={previewRowData.body || ''}
            onChange={(e) => updateTemplateFieldsData('body', e.currentTarget.value)}
          />
        </div>
      </div>
    </TabContainer>
  )
}

TemplateDefinition.propTypes = {
  classes: PropTypes.object.isRequired,
}

const templateDefinitionSelector = (state) => {
  return {
    previewRowData: state.templates.previewRowData,
  }
}

export default connect(
  templateDefinitionSelector,
  { getPreviewTemplateData, updateTemplateFieldsData }
)(withStyles(templateDefinitionStyles)(TemplateDefinition))
