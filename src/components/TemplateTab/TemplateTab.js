import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { withStyles } from '@material-ui/core'

import AlertDialog from '../AlertDialog'
import TabContainer from '~/components/TabContainer'
import InnerTemplate from '../InnerTemplate'
import Button from '../Button'
import OpenModal from '../OpenModal'
import templateStyles from './TemplateTab.style'

class TemplateTab extends Component {
  state = { open: false, newOpen: false, saveOpen: false, previewOpen: false }

  onOpenToggle = () => {
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
    const {} = this.props
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
        <OpenModal open={this.state.open} onClose={this.onOpenToggle} />
        <InnerTemplate />
      </TabContainer>
    )
  }
}

export default withStyles(templateStyles)(TemplateTab)
