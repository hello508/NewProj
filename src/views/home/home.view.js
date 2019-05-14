import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'

import { getFirstTabData, getSecondTabData, getThirdTabData } from './home.actions'

import Tabs from '../../components/Tabs'

import homeStyle from './home.style';

class HomeView extends Component {
  componentDidMount() {
    this.props.getFirstTabData()
  }

  onTabChange = (value) => {
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
    return (
      <div className={classes.tabsContainer}>
        <Tabs onTabChange={this.onTabChange}/>
      </div>
    )
  }
}

export default connect(
    () => ({}),
  {
    getFirstTabData,
    getSecondTabData,
    getThirdTabData,
  }
)(withStyles(homeStyle)(HomeView))
