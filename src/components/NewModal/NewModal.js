import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'

import Button from '../Button'
import newModalStyles from './NewModal.style'

class NewModal extends Component {
  render() {
    const { open, onClose, classes } = this.props
    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <form className={classes.container}>
            <TextField
              label="Template Name"
              className={classes.textField}
              fullWidth
              //value={selectedRow['companyName'] || ''}
              margin="normal"
            />
          </form>
          <label className={classes.templateBody}>Body</label>
          <div>
            <textarea className={classes.formControl} rows="25" />
          </div>
          <Button variant="contained" color="primary" style={{ margin: '10px' }}>
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Modal>
    )
  }
}

export default withStyles(newModalStyles)(NewModal)
