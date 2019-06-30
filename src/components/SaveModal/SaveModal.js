import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Modal from '@material-ui/core/Modal'
import Select from 'react-select'
import { connect } from 'react-redux'

import { templatesSelector } from '~/views/templates/templates.redux'
import {
  getPreviewTemplateData,
  getJinjaTemplateData,
  updateTemplateFieldsData,
  submitSaveFieldsData,
} from '~/views/templates/templates.actions'

import { getSaveColumns } from '../../common/utils'

import SaveDataGrid from '../SaveDataGrid'
import Button from '../Button'
import saveModalStyles from './SaveModal.style'

class SaveModal extends Component {
  state = {
    selectedRow: {},
    templateName: this.props.previewRowData.templateName,
    group: this.props.previewRowData.group,
    categoryName: this.props.categoryData.map((selectedCategoryRow) => ({
      value: selectedCategoryRow.name,
      label: selectedCategoryRow.name,
    })),
    selectedCategoryName: null,
    rowClicked: false,
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

  onRowClicked = (row) => {
    const data = row.group
    const groupData = data.split(',')
    const myList = Object.keys(groupData).map((key) => ({
      label: groupData[key],
      value: groupData[key],
    }))
    this.setState({
      selectedRow: row,
      templateName: this.props.updateTemplateFieldsData('templateName', row.name),
      group: this.props.updateTemplateFieldsData('group', myList),
      rowClicked: true,
    })
  }

  onCategoryNameChange = (selectedValue) => {
    this.setState({ selectedCategoryName: this.props.updateTemplateFieldsData('group', selectedValue) })
  }

  onSaveClick = () => {
    this.props.submitSaveFieldsData(this.onSaveDataFormat())
    this.props.onClose()
  }

  onSaveDataFormat = () => {
    const { previewRowData, defaultRowData, jinjaData } = this.props
    // const group = previewRowData.group
    // const mapGroup = group.map((item) => item.value)
    // const joinGroup = mapGroup.join()
    const data = {
      name: previewRowData.name,
      body: previewRowData.body,
      group: previewRowData.group,
      tags: previewRowData.tags,
      to: defaultRowData.to,
      cc: defaultRowData.cc,
      bcc: defaultRowData.bcc,
      subject: defaultRowData.subject,
      batched: defaultRowData.batched,
      instantAction: defaultRowData.instantAction,
      JinjaArgs: jinjaData,
    }
  }

  render() {
    const { classes, open, onClose, selectedSaveData, previewRowData, updateTemplateFieldsData } = this.props
    let { rowSelected } = this.state
    let groupVal = previewRowData.group
    try {
      if (groupVal !== undefined && !rowSelected) {
        groupVal = groupVal.split(',').map((v) => {
          return { value: v, label: v }
        })
      }
    } catch (err) {
      console.log(`${groupVal}`)
    }

    return (
      <Modal open={open} onClose={onClose}>
        <div className={classes.paper}>
          <Button variant="contained" color="primary" onClick={this.onSaveClick}>
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
            value={groupVal}
            className="basic-multi-select"
            classNamePrefix="select"
          />
          <TextField
            label="Template Name"
            className={classes.textField}
            value={previewRowData.templateName || ''}
            onChange={(e) => updateTemplateFieldsData('templateName', e.currentTarget.value)}
            margin="normal"
          />
        </div>
      </Modal>
    )
  }
}

export default connect(
  templatesSelector,
  {
    getPreviewTemplateData,
    getJinjaTemplateData,
    updateTemplateFieldsData,
    submitSaveFieldsData,
  }
)(withStyles(saveModalStyles)(SaveModal))
