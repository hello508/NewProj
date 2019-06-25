import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import Select from 'react-select'

import { getSaveColumns } from '../../common/utils'

import SaveDataGrid from '../SaveDataGrid'
import Button from '../Button'
import saveModalStyles from './SaveModal.style'

class SaveModal extends Component {
  state = {
    selectedRow: {},
    categoryName: this.props.categoryData.map((selectedCategoryRow) => ({
      value: selectedCategoryRow.name,
      label: selectedCategoryRow.name,
    })),
    selectedCategoryName: null,
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.categoryData != prevProps.categoryData) {
      this.setState({
        categoryName: this.props.categoryData.map((selectedCategoryRow) => ({
          value: selectedCategoryRow.name,
          label: selectedCategoryRow.name,
        })),
      })
    }
  }

  onCategoryNameChange = (selectedValue) => {
    this.setState({
      selectedCategoryName: selectedValue,
    })
  }

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
          <label>Category</label>
          <Select
            isMulti
            onChange={this.onCategoryNameChange}
            options={this.state.categoryName}
            value={this.state.selectedCategoryName}
            className="basic-multi-select"
            classNamePrefix="select"
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
