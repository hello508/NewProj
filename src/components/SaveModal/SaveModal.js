import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'

import { getSaveColumns } from '../../common/utils'

import SaveDataGrid from '../SaveDataGrid'
import Button from '../Button'
import saveModalStyles from './SaveModal.style'

class SaveModal extends Component {
  state = { selectedRow: {} }

  onRowClicked = (row) => {
    this.setState({
      selectedRow: row,
    })
  }

  render() {
    const { classes, open, onClose, selectedSaveData } = this.props
    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <Button variant="contained" color="primary">
            Save
          </Button>
          <SaveDataGrid
            columns={getSaveColumns()}
            onRowClicked={this.onRowClicked}
            selectedSaveData={selectedSaveData}
          />
          <TextField
            label="Template Name"
            className={classes.textField}
            // value={bcc || ''}
            // onChange={onBCCFieldChange}
            margin="normal"
          />
        </div>
      </Modal>
    )
  }
}

export default withStyles(saveModalStyles)(SaveModal)
