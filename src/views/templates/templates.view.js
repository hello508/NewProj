import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'

import { LOAD_PREVIEW_TEMPLATE_DATA, OPEN_MODAL } from '~/views/templates/templates.constants'
import { getOpenModalData, getPreviewTemplateData } from './templates.actions'

import { templatesSelector } from './templates.redux'
import TabContainer from '~/components/TabContainer'
import InnerTemplate from '~/components/InnerTemplate'
import Button from '~/components/Button'
import OpenModal from '~/components/OpenModal'
import NewModal from '~/components/NewModal'
import templateStyles from './templates.style'

class TemplateTab extends Component {
  state = { open: false, newOpen: false, saveOpen: false, previewOpen: false }

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
      newOpen: !prevState.newOpen,
    }))
  }

  previewTemplate = (templateName, templateVersion) => {
    this.props.getPreviewTemplateData(templateName, templateVersion)
    this.setState((prevState) => ({
      open: !prevState.open,
    }))
  }

  render() {
    const { classes, selectedTemplateData, previewRowData } = this.props
    return (
      <TabContainer>
        <Button variant="contained" color="primary" onClick={this.onOpenToggle}>
          Open
        </Button>
        <Button variant="contained" color="primary" onClick={this.onNewToggle}>
          New
        </Button>
        <Button variant="contained" color="primary">
          Save
        </Button>
        <Button variant="contained" color="primary">
          Preview
        </Button>
        <OpenModal
          open={this.state.open}
          onClose={this.openToggle}
          onOpenToggle={this.onOpenToggle}
          selectedTemplateData={selectedTemplateData}
          previewTemplate={this.previewTemplate}
        />
        <NewModal open={this.state.newOpen} onClose={this.onNewToggle} />
        <InnerTemplate previewRowData={previewRowData} />
      </TabContainer>
    )
  }
}

export default connect(
  templatesSelector,
  {
    getOpenModalData,
    getPreviewTemplateData,
  }
)(withStyles(templateStyles)(TemplateTab))
