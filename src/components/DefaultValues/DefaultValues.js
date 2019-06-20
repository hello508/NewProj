import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import TabContainer from '../TabContainer'
import defaultValuesStyles from './DefaultValues.style'

const DefaultValues = (props) => {
  const {
    classes,
    to,
    from,
    cc,
    bcc,
    subject,
    onToFieldChange,
    onFromFieldChange,
    onCCFieldChange,
    onBCCFieldChange,
    onSubjectFieldChange,
  } = props
  return (
    <TabContainer>
      <label>Email Configuration</label>
      <form className={classes.container}>
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
      </form>
    </TabContainer>
  )
}

export default withStyles(defaultValuesStyles)(DefaultValues)
