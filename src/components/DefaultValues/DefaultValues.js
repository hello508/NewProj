import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'

import { updateJinjatFieldsData, updateDefaultFieldsData } from '~/views/templates/templates.actions'

import TabContainer from '../TabContainer'
import defaultValuesStyles from './DefaultValues.style'

class DefaultValues extends Component {
  onUpdateDefaultData = (e, key) => {
    this.props.updateJinjatFieldsData(key, e.currentTarget.value)
  }

  render() {
    const { classes, jinjaData, updateDefaultFieldsData, defaultRowData } = this.props
    return (
      <TabContainer>
        <label>Email Configuration</label>
        <form className={classes.container}>
          <div className={classes.textFieldContainer}>
            <TextField
              label="TO"
              className={classes.textField}
              value={defaultRowData.to || ''}
              onChange={(e) => updateDefaultFieldsData('to', e.currentTarget.value)}
              margin="normal"
            />
            <TextField
              label="From"
              className={classes.textField}
              value={defaultRowData.from || ''}
              onChange={(e) => updateDefaultFieldsData('from', e.currentTarget.value)}
              margin="normal"
            />
            <TextField
              label="CC"
              className={classes.textField}
              value={defaultRowData.cc || ''}
              onChange={(e) => updateDefaultFieldsData('cc', e.currentTarget.value)}
              margin="normal"
            />
            <TextField
              label="BCC"
              className={classes.textField}
              value={defaultRowData.bcc || ''}
              onChange={(e) => updateDefaultFieldsData('bcc', e.currentTarget.value)}
              margin="normal"
            />
            <TextField
              label="Subject"
              className={classes.textField}
              value={defaultRowData.subject || ''}
              onChange={(e) => updateDefaultFieldsData('subject', e.currentTarget.value)}
              margin="normal"
            />
            <TextField
              label="Reply TO"
              className={classes.textField}
              value={defaultRowData.replyTo || ''}
              onChange={(e) => updateDefaultFieldsData('replyTo', e.currentTarget.value)}
              margin="normal"
            />
          </div>
          <div className={classes.checkBoxContainer}>
            <label>Batched</label>
            <Checkbox value="checkedD" />
            <label>Action</label>
            <Checkbox value="checkedD" />
          </div>
          {Object.keys(jinjaData).map((key, index) => (
            <div key={index}>
              <TextField
                label={key}
                className={classes.textField}
                value={jinjaData[key]}
                onChange={(e) => this.onUpdateDefaultData(e, key)}
                margin="normal"
              />
            </div>
          ))}
        </form>
      </TabContainer>
    )
  }
}

const defaultValuesSelector = (state) => {
  return {
    jinjaData: state.templates.jinjaData,
    defaultRowData: state.templates.defaultRowData,
  }
}

export default connect(
  defaultValuesSelector,
  { updateJinjatFieldsData, updateDefaultFieldsData }
)(withStyles(defaultValuesStyles)(DefaultValues))
