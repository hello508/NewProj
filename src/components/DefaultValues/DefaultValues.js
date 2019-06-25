import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Checkbox from '@material-ui/core/Checkbox'
import { connect } from 'react-redux'

import { updateDefaultFieldsData } from '~/views/templates/templates.actions'

import TabContainer from '../TabContainer'
import defaultValuesStyles from './DefaultValues.style'

class DefaultValues extends Component {
  onUpdateDefaultData = (e, key) => {
    this.props.updateDefaultFieldsData(key, e.currentTarget.value)
  }

  render() {
    const {
      classes,
      to,
      from,
      cc,
      bcc,
      replyTo,
      subject,
      onToFieldChange,
      onFromFieldChange,
      onCCFieldChange,
      onBCCFieldChange,
      onSubjectFieldChange,
      onReplyToFieldChange,
      jinjaData,
    } = this.props
    return (
      <TabContainer>
        <label>Email Configuration</label>
        <form className={classes.container}>
          <div className={classes.textFieldContainer}>
            <TextField
              label="TO"
              className={classes.textField}
              value={to || ''}
              onChange={onToFieldChange}
              margin="normal"
            />
            <TextField
              label="From"
              className={classes.textField}
              value={from || ''}
              onChange={onFromFieldChange}
              margin="normal"
            />
            <TextField
              label="CC"
              className={classes.textField}
              value={cc || ''}
              onChange={onCCFieldChange}
              margin="normal"
            />
            <TextField
              label="BCC"
              className={classes.textField}
              value={bcc || ''}
              onChange={onBCCFieldChange}
              margin="normal"
            />
            <TextField
              label="Subject"
              className={classes.textField}
              value={subject || ''}
              onChange={onSubjectFieldChange}
              margin="normal"
            />
            <TextField
              label="Subject"
              className={classes.textField}
              value={replyTo || ''}
              onChange={onReplyToFieldChange}
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
  }
}

export default connect(
  defaultValuesSelector,
  { updateDefaultFieldsData }
)(withStyles(defaultValuesStyles)(DefaultValues))
