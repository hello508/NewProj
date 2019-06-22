import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { connect } from 'react-redux'
import { updatePreviewFieldsData } from '~/views/templates/templates.actions'

import TabContainer from '../TabContainer'
import previewValuesStyles from './PreviewValues.style'

const PreviewValues = ({ classes, previewData, updatePreviewFieldsData }) => {
  return (
    <TabContainer>
      {Object.keys(previewData).map((key, index) => (
        <div key={index}>
          <TextField
            label={key}
            className={classes.textField}
            value={previewData[key]}
            onChange={(e) => updatePreviewFieldsData(key, e.currentTarget.value)}
            margin="normal"
          />
        </div>
      ))}
    </TabContainer>
  )
}

const previewValuesSelector = (state) => {
  return {
    previewData: state.templates.previewData,
  }
}

export default connect(
  previewValuesSelector,
  { updatePreviewFieldsData }
)(withStyles(previewValuesStyles)(PreviewValues))
