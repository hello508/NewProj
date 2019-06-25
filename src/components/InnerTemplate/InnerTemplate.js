import React, { Component } from 'react'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

import TemplateDefinition from '../TemplateDefinition'
import DefaultValues from '../DefaultValues'
import PreviewValues from '../PreviewValues'
import innerTemplateStyle from './InnerTemplateStyle'

class InnerTemplate extends Component {
  state = {
    value: 0,
    templateName: this.props.previewRowData.templateName,
    templateVersion: this.props.previewRowData.templateVersion,
    body: this.props.previewRowData.body,
    to: this.props.previewRowData.to,
    bcc: this.props.previewRowData.bcc,
    cc: this.props.previewRowData.cc,
    from: this.props.previewRowData.from,
    subject: this.props.previewRowData.subject,
    replyTo: this.props.previewRowData.replyTo,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.previewRowData !== this.props.previewRowData) {
      this.setState({
        templateName: this.props.previewRowData.templateName,
        templateVersion: this.props.previewRowData.templateVersion,
        body: this.props.previewRowData.body,
        to: this.props.previewRowData.to,
        cc: this.props.previewRowData.cc,
        from: this.props.previewRowData.from,
        bcc: this.props.previewRowData.bcc,
        subject: this.props.previewRowData.subject,
        replyTo: this.props.previewRowData.replyTo,
      })
    }
  }

  handleChange = (event, value) => {
    if (value === 1 || 2) {
      const { templateName, templateVersion, body } = this.state
      this.props.defaultValuesTemplate(templateName, templateVersion, body)
    }
    this.setState({ value })
  }

  onBodyChange = (e) => {
    const value = e.currentTarget.value
    console.log(value)
    this.setState({ body: value })
  }

  onToFieldChange = (e) => {
    const value = e.currentTarget.value
    this.setState({ to: value })
  }

  onFromFieldChange = (e) => {
    const value = e.currentTarget.value
    this.setState({ from: value })
  }

  onCCFieldChange = (e) => {
    const value = e.currentTarget.value
    this.setState({ cc: value })
  }

  onBCCFieldChange = (e) => {
    const value = e.currentTarget.value
    this.setState({ bcc: value })
  }

  onSubjectFieldChange = (e) => {
    const value = e.currentTarget.value
    this.setState({ subject: value })
  }

  onReplyToFieldChange = (e) => {
    const value = e.currentTarget.value
    this.setState({ replyTo: value })
  }

  render() {
    const { classes, jinjaData } = this.props
    const { value, to, cc, bcc, from, subject, templateName, templateVersion, body, replyTo } = this.state
    return (
      <div className={classes.tabsContainer}>
        <div className={classes.root}>
          <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
            <Tab label="Template" className={classes.tabItem} />
            <Tab label="Default" className={classes.tabItem} />
            <Tab label="Preview" className={classes.tabItem} />
          </Tabs>
          {value === 0 && (
            <TemplateDefinition
              templateName={templateName}
              templateVersion={templateVersion}
              body={body}
              onBodyChange={this.onBodyChange}
            />
          )}
          {value === 1 && (
            <DefaultValues
              to={to}
              cc={cc}
              bcc={bcc}
              from={from}
              subject={subject}
              onToFieldChange={this.onToFieldChange}
              onFromFieldChange={this.onFromFieldChange}
              onBCCFieldChange={this.onBCCFieldChange}
              onCCFieldChange={this.onCCFieldChange}
              onSubjectFieldChange={this.onSubjectFieldChange}
              onReplyToFieldChange={this.onReplyToFieldChange}
            />
          )}
          {value === 2 && <PreviewValues />}
        </div>
      </div>
    )
  }
}

export default withStyles(innerTemplateStyle)(InnerTemplate)
