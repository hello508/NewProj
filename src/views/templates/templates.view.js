import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'

import {
  getOpenModalData,
  getPreviewTemplateData,
  getDefaultTemplateData,
  submitPreviewFieldsData,
  getSaveModalData,
  clearAllData,
} from './templates.actions'

import { templatesSelector } from './templates.redux'
import TabContainer from '~/components/TabContainer'
import InnerTemplate from '~/components/InnerTemplate'
import Button from '~/components/Button'
import OpenModal from '~/components/OpenModal'
import SaveModal from '~/components/SaveModal'
import PreviewModal from '~/components/PreviewModal'
import templateStyles from './templates.style'

class TemplateTab extends Component {
  state = { open: false, saveOpen: false, previewOpen: false }

  componentDidUpdate(prevProps) {
    if (this.props.previewTemplateData !== prevProps.previewTemplateData) {
      this.onPreviewToggle()
    }
  }

  onOpenClick = () => {
    this.props.getOpenModalData()
    this.onOpenToggle()
  }

  onOpenToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      open: !prevState.open,
    }))
  }

  onSaveClick = () => {
    this.props.getSaveModalData()
    this.onSaveToggle()
  }

  onSaveToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      saveOpen: !prevState.saveOpen,
    }))
  }

  onNewClick = () => {
    this.props.clearAllData()
  }

  onPreviewClick = () => {
    this.props.submitPreviewFieldsData(this.props.previewData)
    this.onPreviewToggle()
  }

  onPreviewToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      previewOpen: !prevState.previewOpen,
    }))
  }

  previewTemplate = (templateName, templateVersion) => {
    this.props.getPreviewTemplateData(templateName, templateVersion)
    this.setState((prevState) => ({
      open: !prevState.open,
    }))
  }

  defaultValuesTemplate = (templateName, templateVersion, body) => {
    this.props.getDefaultTemplateData(templateName, templateVersion, body)
  }

  render() {
    const { classes, selectedTemplateData, previewRowData, previewTemplateData, selectedSaveData } = this.props
    return (
      <TabContainer>
        <Button variant="contained" color="primary" onClick={this.onOpenClick}>
          Open
        </Button>
        <Button variant="contained" color="primary" onClick={this.onNewClick}>
          New
        </Button>
        <Button variant="contained" color="primary" onClick={this.onSaveClick}>
          Save As
        </Button>
        <Button variant="contained" color="primary" onClick={this.onPreviewClick}>
          Preview
        </Button>
        <OpenModal
          open={this.state.open}
          onClose={this.onOpenToggle}
          selectedTemplateData={selectedTemplateData}
          previewTemplate={this.previewTemplate}
        />
        <SaveModal open={this.state.saveOpen} onClose={this.onSaveToggle} selectedSaveData={selectedSaveData} />
        <PreviewModal
          open={this.state.previewOpen}
          onClose={this.onPreviewToggle}
          previewTemplateData={previewTemplateData}
        />
        <InnerTemplate previewRowData={previewRowData} defaultValuesTemplate={this.defaultValuesTemplate} />
      </TabContainer>
    )
  }
}

export default connect(
  templatesSelector,
  {
    getOpenModalData,
    getPreviewTemplateData,
    getDefaultTemplateData,
    getSaveModalData,
    submitPreviewFieldsData,
    clearAllData,
  }
)(withStyles(templateStyles)(TemplateTab))
