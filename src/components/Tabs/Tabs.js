import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import DataGrid from '../Grids/DataGrid';

import styles from './Tabs.style';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
  onTabChange: PropTypes.func.required,
};

function getColumns() {
  const defaultColumnProperties = {
    resizable: true,
    width: 250
  };

  const columns = [
    {
      key: "id",
      name: "ID"
    },
    {
      key: "title",
      name: "Title"
    },
    {
      key: "firstName",
      name: "First Name"
    },
    {
      key: "lastName",
      name: "Last Name"
    },
    {
      key: "email",
      name: "Email"
    },
    {
      key: "street",
      name: "Street"
    },
    {
      key: "zipCode",
      name: "ZipCode"
    },
    {
      key: "date",
      name: "Date"
    },
    {
      key: "jobTitle",
      name: "Job Title"
    },
    {
      key: "catchPhrase",
      name: "Catch Phrase"
    },
    {
      key: "jobArea",
      name: "Job Area"
    },
    {
      key: "jobType",
      name: "Job Type"
    }
  ].map(c => ({ ...c, ...defaultColumnProperties }));
  return columns;
}

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    this.props.onTabChange(value);
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
          <Tab label="Item One" className={classes.tabItem} />
          <Tab label="Item Two" className={classes.tabItem} />
          <Tab label="Item Three" className={classes.tabItem} />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <DataGrid columns={getColumns()} rowKey="firstTabRows"/>
          </TabContainer>
        )}
        {value === 1 && <TabContainer><DataGrid columns={getColumns()} rowKey="secondTabRows"/></TabContainer>}
        {value === 2 && <TabContainer><DataGrid columns={getColumns()} rowKey="thirdTabRows"/></TabContainer>}
      </div>
    );
  }
}

SimpleTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTabs);
