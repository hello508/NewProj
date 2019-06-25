import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { connect } from 'react-redux'

import { getPreviewTemplateData } from '~/views/templates/templates.actions'

import TemplateDefinition from '../TemplateDefinition'
import DefaultValues from '../DefaultValues'
import PreviewValues from '../PreviewValues'
import innerTemplateStyle from './InnerTemplateStyle'

class InnerTemplate extends Component {
  state = {
    value: 0,
  }

  handleChange = (event, value) => {
    if (value === 1 || 2) {
      const { previewRowData } = this.props
      this.props.defaultValuesTemplate(previewRowData.templateName, previewRowData.templateVersion, previewRowData.body)
    }
    this.setState({ value })
  }

  render() {
    const { classes, previewRowData } = this.props
    const { value } = this.state
    return (
      <div className={classes.tabsContainer}>
        <div className={classes.root}>
          <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
            <Tab label="Template" className={classes.tabItem} />
            <Tab label="Default" className={classes.tabItem} />
            <Tab label="Preview" className={classes.tabItem} />
          </Tabs>
          {value === 0 && <TemplateDefinition />}
          {value === 1 && <DefaultValues />}
          {value === 2 && <PreviewValues />}
        </div>
      </div>
    )
  }
}

const templateDefinitionSelector = (state) => {
  return {
    previewRowData: state.templates.previewRowData,
  }
}

export default connect(
  templateDefinitionSelector,
  { getPreviewTemplateData }
)(withStyles(innerTemplateStyle)(InnerTemplate))
