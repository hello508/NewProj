import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'
import DataGrid from '../Grids/DataGrid'
import Button from '@material-ui/core/Button'
import AlertDialog from '../AlertDialog/AlertDialog'
import TextFields from '../DetailsContainer/DetailsContainer'
import SimpleAppBar from '../AppBar/AppBar'
import TextareaPage from '../TextArea/TextArea'

import styles from './Tabs.style'

function TabContainer(props) {
  return <Typography component="div">{props.children}</Typography>
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
}

function getColumns() {
  const defaultColumnProperties = {
    resizable: true,
    width: 250,
  }

  const columns = [
    {
      key: 'id',
      name: 'ID',
    },
    {
      key: 'title',
      name: 'Title',
    },
    {
      key: 'firstName',
      name: 'First Name',
    },
    {
      key: 'lastName',
      name: 'Last Name',
    },
    {
      key: 'email',
      name: 'Email',
    },
    {
      key: 'street',
      name: 'Street',
    },
    {
      key: 'zipCode',
      name: 'ZipCode',
    },
    {
      key: 'date',
      name: 'Date',
    },
    {
      key: 'jobTitle',
      name: 'Job Title',
    },
    {
      key: 'catchPhrase',
      name: 'Catch Phrase',
    },
    {
      key: 'jobArea',
      name: 'Job Area',
    },
    {
      key: 'jobType',
      name: 'Job Type',
    },
  ].map((c) => ({ ...c, ...defaultColumnProperties }))
  return columns
}

class SimpleTabs extends React.Component {
  state = {
    value: 0,
    open: false,
  }

  handleChange = (event, value) => {
    this.setState({ value })
    this.props.onTabChange(value)
  }

  handleClickOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  render() {
    const { classes } = this.props
    const { value } = this.state

    return (
      <div className={classes.root}>
        <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
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
        {value === 0 && (
          <TabContainer>
            <Button variant="contained" color="primary" onClick={this.handleClickOpen} className={classes.button}>
              Approve
            </Button>
            <Button variant="contained" color="secondary" onClick={this.handleClickOpen} className={classes.button}>
              Reject
            </Button>
            <AlertDialog open={this.state.open} onClose={this.handleClose} />
            <DataGrid columns={getColumns()} rowKey="firstTabRows" />
            <SimpleAppBar />
            <TextFields />
            <TextareaPage />
          </TabContainer>
        )}
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
    )
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  onTabChange: PropTypes.func.isRequired,
}

export default withStyles(styles)(SimpleTabs)
