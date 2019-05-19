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

import { getColumns } from '~/common/utils';

import DataGrid from '~/components/Grids';
import AlertDialog from '~/components/AlertDialog';
import TextFields from '~/components/DetailsContainer';
import SimpleAppBar from '~/components/AppBar';
import TextareaPage from '~/components/TextArea';
import PendingApprovalTab from '~/components/PendingApprovalTab';
import TabContainer from '~/components/TabContainer';

import { getFirstTabData, getSecondTabData, getThirdTabData, approveRows } from './home.actions';

import homeStyle from './home.style';

class HomeView extends Component {
  state = {
    value: 0,
  };

  componentDidMount() {
    this.props.getFirstTabData();
  }

  onTabChange = (event, value) => {
    this.setState((prevState) => ({
      ...prevState,
      value,
    }));
    if (value === 0) {
      this.props.getFirstTabData();
    } else if (value === 1) {
      // tab 2
      this.props.getSecondTabData();
    } else if (value === 2) {
      // tab 3
      this.props.getThirdTabData();
    }
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div className={classes.tabsContainer}>
        <div className={classes.root}>
          <Tabs variant="fullWidth" value={value} onChange={this.onTabChange}>
            <Tab
              label={
                <Badge className={classes.padding} color="secondary" badgeContent={4}>
                  Tab One
                </Badge>
              }
              className={classes.tabItem}
            />
            <Tab label="Tab two" className={classes.tabItem} />
            <Tab
              label={
                <Badge className={classes.padding} color="secondary" badgeContent={4}>
                  Tab three
                </Badge>
              }
              className={classes.tabItem}
            />
            <Tab label="Tab Four" className={classes.tabItem} />
          </Tabs>
          {value === 0 && <PendingApprovalTab approveRows={this.props.approveRows} />}
          {value === 1 && (
            <TabContainer>
              <div className={classes.approvedContainer}>
                <DataGrid columns={getColumns()} rowKey="secondTabRows" />
                <SimpleAppBar />
                <TextFields />
                <TextareaPage />
              </div>
            </TabContainer>
          )}
          {value === 2 && (
            <TabContainer>
              <Button variant="contained" color="secondary" onClick={this.handleClickOpen} className={classes.button}>
                Reject
              </Button>
              <DataGrid columns={getColumns()} rowKey="thirdTabRows" />
              <SimpleAppBar />
              <TextFields />
              <TextareaPage />
            </TabContainer>
          )}
          {value === 3 && (
            <TabContainer>
              <Tabs value={value}>
                <Tab label="Tab Five" className={classes.tabItem} />
                <Tab label="TTab Six" className={classes.tabItem} />
              </Tabs>
            </TabContainer>
          )}
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
)(withStyles(homeStyle)(HomeView));
