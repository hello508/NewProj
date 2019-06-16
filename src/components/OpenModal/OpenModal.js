import React, { component } from 'react'
import Modal from '@material-ui/core/Modal'
import Select from 'react-select'
import { withStyles } from '@material-ui/core'

import Button from '../Button'
import openModalStyles from './OpenModal.style'

class OpenModal extends Component {
  state = {
    selectedOption: null,
  }

  render() {
    const { selectedOption } = this.state
    const { open, onClose, classes } = this.props
    return (
      <Modal open={open}>
        <div className={classes.paper}>
          <div className={classes.templateContainer}>
            <label>Template Name</label>
            <Select
              value={selectedOption}
              //onChange
              //options
            />
          </div>
          <div className={classes.templateVersionContainer}>
            <label>Template Version</label>
            <Select
              value={selectedOption}
              //onChange
              //options
            />
          </div>
          <Button variant="contained" color="primary" style={{ margin: '10px' }}>
            Preview Template
          </Button>
          <Button variant="contained" color="secondary" onClick={onClose}>
            Cancel
          </Button>
        </div>
      </Modal>
    )
  }
}

export default withStyles(openModalStyles)(OpenModal)
