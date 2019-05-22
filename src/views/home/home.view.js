import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

import { getColumns } from '~/common/utils';

import DataGrid from '~/components/Grids';
import AlertDialog from '~/components/AlertDialog';
import TextFields from '~/components/DetailsContainer';
import SimpleAppBar from '~/components/AppBar';
import TextareaPage from '~/components/TextArea';
import PendingApprovalTab from '~/components/PendingApprovalTab';
import ApprovedTab from '~/components/ApprovedTab';
import NotificationTab from '~/components/NotificationTab';
import TabContainer from '~/components/TabContainer';

import { getFirstTabData, getSecondTabData, getThirdTabData, approveRows } from './home.actions';

import homeStyle from './home.style';

class HomeView extends Component {
  componentDidMount() {
    this._refreshData();
  }

  componentDidUpdate() {
    this._refreshData();
  }

  _refreshData() {
    const { match } = this.props;
    switch (match.params.tab) {
      case 'tabOne': {
        this.props.getFirstTabData(match.params);
        break;
      }
      case 'tabTwo': {
        this.props.getSecondTabData(match.params);
        break;
      }
      case 'tabThree': {
        this.props.getThirdTabData(match.params);
        break;
      }
      default: {
        break;
      }
    }
  }

  render() {
    const { classes, match } = this.props;
    return (
      <div className={classes.tabsContainer}>
        <div className={classes.root}>
          {match.params.tab === 'tabOne' && <PendingApprovalTab approveRows={this.props.approveRows} />}
          {match.params.tab === 'tabTwo' && (
            <div className={classes.approvedTabContainer}>
              <ApprovedTab />
            </div>
          )}
          {match.params.tab === 'tabThree' && <NotificationTab />}
          {false && <div />}
        </div>
      </div>
    );
  }
}

export default connect(
  () => ({}),
  {
    getFirstTabData,
    getSecondTabData,
    getThirdTabData,
    approveRows,
  }
)(withStyles(homeStyle)(withRouter(HomeView)));
