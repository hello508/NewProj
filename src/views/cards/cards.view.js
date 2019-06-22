import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Badge from '@material-ui/core/Badge'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Link, withRouter } from 'react-router-dom'

import TabContainer from '~/components/TabContainer'
import TemplateTab from '../templates/templates.view'

import { getFirstTabCardData, getSecondTabCardData, getThirdTabCardData } from './cards.actions'
import { cardsSelector } from './cards.redux'
import cardStyle from './cards.style'
import { TAB_ONE, TAB_TWO, TAB_THREE, TAB_FOUR } from './cards.constants'

class CardsView extends Component {
  componentDidMount() {
    this._refreshData()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.tab !== this.props.match.params.tab) {
      this._refreshData()
    }
  }

  _refreshData() {
    const {
      match: {
        params: { tab },
      },
    } = this.props
    switch (tab) {
      case TAB_ONE: {
        this.props.getFirstTabCardData()
        break
      }
      case TAB_TWO: {
        this.props.getSecondTabCardData()
        break
      }
      case TAB_THREE: {
        this.props.getThirdTabCardData()
        break
      }
      default: {
        break
      }
    }
  }

  onTabChange = (event, value) => {
    if (value === 0) {
      this.props.history.push('/tabOne')
    } else if (value === 1) {
      // tab 2
      this.props.history.push('/tabTwo')
    } else if (value === 2) {
      // tab 3
      this.props.history.push('/tabThree')
    } else if (value === 3) {
      // tab 3
      this.props.history.push('/tabFour')
    }
  }

  _getValue() {
    const {
      match: {
        params: { tab },
      },
    } = this.props
    switch (tab) {
      case TAB_ONE: {
        return 0
      }
      case TAB_TWO: {
        return 1
      }
      case TAB_THREE: {
        return 2
      }
      case TAB_FOUR: {
        return 3
      }
      default: {
        return 4
      }
    }
  }

  _renderTab(tabData, tab) {
    const { classes } = this.props
    return (
      <div className={classes.tabContentContainer}>
        {tabData.map((data, index) => (
          <Card
            className={classes.cardContainer}
            key={index}
            onClick={() => {
              this.props.history.push(`/tabs/${tab}/${data.groupName}`)
            }}
          >
            <CardContent className={classes.cardContentContainer}>
              <div className={classes.groupName}>
                <>{data.groupName}</>
              </div>
              <div className={classes.countsContainer}>
                <div className={classes.count}>
                  <div>{data.assignedToMe}</div>
                </div>
                <div className={classes.delegatedcount}>
                  <div>{data.delegatedToMe}</div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  render() {
    const {
      classes,
      firstTabCardData,
      secondTabCardData,
      thirdTabCardData,
      notificationBadgeCount,
      pendingApprovalBadgecount,
      match: {
        params: { tab },
      },
    } = this.props
    const value = this._getValue()
    return (
      <div className={classes.tabsContainer}>
        <div className={classes.root}>
          <Tabs variant="fullWidth" value={value} onChange={this.onTabChange}>
            <Tab
              label={
                <Badge className={classes.padding} color="secondary" badgeContent={pendingApprovalBadgecount}>
                  Tab One
                </Badge>
              }
              className={classes.tabItem}
            />
            <Tab label="Tab two" className={classes.tabItem} />
            <Tab
              label={
                <Badge className={classes.padding} color="secondary" badgeContent={notificationBadgeCount}>
                  Tab three
                </Badge>
              }
              className={classes.tabItem}
            />
            <Tab label="Tab Four" className={classes.tabItem} />
          </Tabs>
          {tab === TAB_ONE && this._renderTab(firstTabCardData, TAB_ONE)}
          {tab === TAB_TWO && this._renderTab(secondTabCardData, TAB_TWO)}
          {tab === TAB_THREE && this._renderTab(thirdTabCardData, TAB_THREE)}
          {tab === TAB_FOUR && <TemplateTab />}
        </div>
      </div>
    )
  }
}

export default connect(
  cardsSelector,
  {
    getFirstTabCardData,
    getSecondTabCardData,
    getThirdTabCardData,
  }
)(withStyles(cardStyle)(withRouter(CardsView)))
