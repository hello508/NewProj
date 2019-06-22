import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import Modal from '@material-ui/core/Modal'

import SaveDataGrid from '../SaveGrid'

import TextFields from '../DetailsContainer'
import Button from '../Button'

import { getSaveColumns } from '../../common/utils'

import saveModalStyles from './SaveModal.style'

class SaveModal extends Component {
  state = { selectedRow: {} }

  onRowClicked = (row) => {
    this.setState({
      selectedRow: row,
    })
  }

  render() {
    return (
      <Modal>
        <Button variant="contained" color="primary">
          Save
        </Button>
        <SaveDataGrid columns={getSaveColumns()} onRowClicked={this.onRowClicked} />
        <TextFields label="Template Name" />
      </Modal>
    )
  }
}

export default withStyles(saveModalStyles)(SaveModal)
