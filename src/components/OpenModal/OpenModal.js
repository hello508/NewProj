import React, { Component } from 'react'
import Modal from '@material-ui/core/Modal'
import Select from 'react-select'
import { withStyles } from '@material-ui/core'

import Button from '../Button'
import openModalStyles from './OpenModal.style'

class OpenModal extends Component {
  state = {
    templateName: this.props.selectedTemplateData.map((selectedTemplateRow) => ({
      value: selectedTemplateRow.templateName,
      label: selectedTemplateRow.templateName,
    })),
    templateVersion: [],
    selectedTemplateName: null,
    selectedTemplateVersion: null,
  }

  componentDidUpdate = (prevProps) => {
    if (this.props.selectedTemplateData != prevProps.selectedTemplateData) {
      this.setState({
        templateName: this.props.selectedTemplateData.map((selectedTemplateRow) => ({
          value: selectedTemplateRow.templateName,
          label: selectedTemplateRow.templateName,
        })),
        templateVersion: [],
      })
    }
  }

  onTemplateNameChange = (selectedValue) => {
    const selectedObject = this.props.selectedTemplateData.find(
      (selectedRow) => selectedRow.templateName === selectedValue.value
    )
    this.setState({
      selectedTemplateName: selectedValue,
      templateVersion: selectedObject.templateVersion.map((selectedTemplateVersionData) => ({
        value: selectedTemplateVersionData,
        label: selectedTemplateVersionData,
      })),
    })
  }

  onTemplateVersionChnage = (selectedValue) => {
    this.setState({
      selectedTemplateVersion: selectedValue,
    })
  }

  render() {
    const { selectedOption } = this.state
    const { open, onClose, classes, selectedTemplateData } = this.props
    return (
      <Modal open={open}>
        <div className={classes.paper}>
          <div className={classes.templateContainer}>
            <label>Template Name</label>
            <Select
              value={this.state.selectedTemplateName}
              onChange={this.onTemplateNameChange}
              options={this.state.templateName}
            />
          </div>
          <div className={classes.templateVersionContainer}>
            <label>Template Version</label>
            <Select
              value={this.state.selectedTemplateVersion}
              onChange={this.onTemplateVersionChnage}
              options={this.state.templateVersion}
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
