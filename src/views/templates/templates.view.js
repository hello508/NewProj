import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core'

import { LOAD_PREVIEW_TEMPLATE_DATA, OPEN_MODAL } from '~/views/templates/templates.constants'
import { getOpenModalData } from './templates.actions'

import { templatesSelector } from './templates.redux'
import TabContainer from '~/components/TabContainer'
import InnerTemplate from '~/components/InnerTemplate'
import Button from '~/components/Button'
import OpenModal from '~/components/OpenModal'
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

  render() {
    const { classes, selectedTemplateData } = this.props
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
        />
        <InnerTemplate />
      </TabContainer>
    )
  }
}

export default connect(
  templatesSelector,
  {
    getOpenModalData,
  }
)(withStyles(templateStyles)(TemplateTab))
