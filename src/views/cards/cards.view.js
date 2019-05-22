import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core'
import PropTypes from 'prop-types'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Badge from '@material-ui/core/Badge'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Link } from 'react-router-dom'

import TabContainer from '~/components/TabContainer'

import { getFirstTabCardData, getSecondTabCardData, getThirdTabCardData } from './cards.actions'
import { cardsSelector } from './cards.redux'
import cardStyle from './cards.style'

class CardsView extends Component {
  state = {
    value: 0,
  }

  componentDidMount() {
    this.props.getFirstTabCardData()
  }

  onTabChange = (event, value) => {
    this.setState((prevState) => ({
      ...prevState,
      value,
    }))
    if (value === 0) {
      window.location.reload(true)
      this.props.getFirstTabCardData()
    } else if (value === 1) {
      // tab 2
      this.props.getSecondTabCardData()
    } else if (value === 2) {
      // tab 3
      this.props.getThirdTabCardData()
    }
  }

  _renderTab(tabData, tab) {
    const { classes } = this.props
    return (
      <div className={classes.tabContentContainer}>
        {tabData.map((data) => (
          <Card className={classes.cardContainer}>
            <CardContent className={classes.cardContentContainer}>
              <div className={classes.groupName}>
                <Link to={`${tab}?group=${data.groupName}`}>{data.groupName}</Link>
              </div>
              <div className={classes.countsContainer}>
                <div className={classes.count}>
                  <Link to={`${tab}?assignedToMe=true`}>{data.assignedToMe}</Link>
                </div>
                <div className={classes.count}>
                  <Link to={`${tab}?delegatedToMe=true`}>{data.delegatedToMe}</Link>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  render() {
    const { classes, firstTabCardData, secondTabCardData, thirdTabCardData } = this.props
    const { value } = this.state
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
          {value === 0 && this._renderTab(firstTabCardData, 'tabOne')}
          {value === 1 && this._renderTab(secondTabCardData, 'tabtwo')}
          {value === 2 && this._renderTab(thirdTabCardData, 'tabThree')}
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
)(withStyles(cardStyle)(CardsView))
