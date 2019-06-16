import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import Button from '@material-ui/core/Button'
import { withRouter } from 'react-router-dom'
import { ToastContainer } from 'react-toastr'

import { getColumns } from '~/common/utils'

import DataGrid from '~/components/Grids'
import AlertDialog from '~/components/AlertDialog'
import TextFields from '~/components/DetailsContainer'
import SimpleAppBar from '~/components/AppBar'
import TextareaPage from '~/components/TextArea'
import PendingApprovalTab from '~/components/PendingApprovalTab'
import ApprovedTab from '~/components/ApprovedTab'
import NotificationTab from '~/components/NotificationTab'
import TemplateTab from '~/components/TemplateTab'
import TabContainer from '~/components/TabContainer'

import { TAB_ONE, TAB_TWO, TAB_THREE, TAB_FOUR } from '~/views/cards/cards.constants'

import { getFirstTabData, getSecondTabData, getThirdTabData, approveRows } from './home.actions'

import homeStyle from './home.style'

class HomeView extends Component {
  container = null
  componentDidMount() {
    this._refreshData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.tab !== this.props.match.params.tab) {
      this._refreshData()
    }
    if (prevProps.approvedRows !== this.props.approvedRows) {
      this.props.approvedRows.forEach((approvedRow) => {
        this.container[approvedRow.status](approvedRow.message, approvedRow.status, {
          closeButton: true,
          timeOut: 1000,
        })
      })
    }
  }

  _refreshData() {
    const { match } = this.props
    switch (match.params.tab) {
      case TAB_ONE: {
        this.props.getFirstTabData(match.params)
        break
      }
      case TAB_TWO: {
        this.props.getSecondTabData(match.params)
        break
      }
      case TAB_THREE: {
        this.props.getThirdTabData(match.params)
        break
      }
      default: {
        break
      }
    }
  }

  onApprove = (selectedRows) => {
    const { match } = this.props
    this.props.approveRows(selectedRows, match.params.tab, match.params.groupName)
  }

  render() {
    const { classes, match, approvedRows } = this.props
    return (
      <div className={classes.tabsContainer}>
        <ToastContainer ref={(ref) => (this.container = ref)} className="toast-top-right" />
        <div className={classes.root}>
          {match.params.tab === TAB_ONE && <PendingApprovalTab approveRows={this.onApprove} />}
          {match.params.tab === TAB_TWO && (
            <div className={classes.approvedTabContainer}>
              <ApprovedTab />
            </div>
          )}
          {match.params.tab === TAB_THREE && <NotificationTab />}
          {match.params.tab === TAB_FOUR && <TemplateTab />}
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => ({ approvedRows: state.home.approvedRows }),
  {
    getFirstTabData,
    getSecondTabData,
    getThirdTabData,
    approveRows,
  }
)(withStyles(homeStyle)(withRouter(HomeView)))
