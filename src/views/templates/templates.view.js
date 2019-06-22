import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'

import { LOAD_PREVIEW_TEMPLATE_DATA, OPEN_MODAL } from '~/views/templates/templates.constants'
import {
  getOpenModalData,
  getPreviewTemplateData,
  getDefaultTemplateData,
  submitPreviewFieldsData,
} from './templates.actions'

import { templatesSelector } from './templates.redux'
import TabContainer from '~/components/TabContainer'
import InnerTemplate from '~/components/InnerTemplate'
import Button from '~/components/Button'
import OpenModal from '~/components/OpenModal'
import PreviewModal from '~/components/PreviewModal'
import templateStyles from './templates.style'

class TemplateTab extends Component {
  state = { open: false, newOpen: false, saveOpen: false, previewOpen: false }

  componentDidUpdate(prevProps) {
    if (this.props.previewTemplateData !== prevProps.previewTemplateData) {
      this.onPreviewToggle()
    }
  }

  onOpenToggle = () => {
    this.props.getOpenModalData()
    this.openToggle()
  }

  openToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      open: !prevState.open,
    }))
  }

  onNewToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      newOpen: !prevState.newOpen,
    }))
  }

  onPreviewToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      previewOpen: !prevState.previewOpen,
    }))
  }

  onPreviewClick = () => {
    this.props.submitPreviewFieldsData(this.props.previewData)
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
    const { classes, selectedTemplateData, previewRowData, previewTemplateData } = this.props
    return (
      <TabContainer>
        <Button variant="contained" color="primary" onClick={this.openToggle}>
          Open
        </Button>
        <Button variant="contained" color="primary">
          New
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="primary" onClick={this.onPreviewClick}>
          Preview
        </Button>
        <OpenModal
          open={this.state.open}
          onClose={this.openToggle}
          onOpenToggle={this.onOpenToggle}
          selectedTemplateData={selectedTemplateData}
          previewTemplate={this.previewTemplate}
        />
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
    submitPreviewFieldsData,
  }
)(withStyles(templateStyles)(TemplateTab))
