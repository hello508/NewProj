import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Badge from '@material-ui/core/Badge'

import DataGrid from '../Grids'
import AlertDialog from '../AlertDialog'
import SimpleAppBar from '../AppBar'
import TextareaPage from '../TextArea'
import TabContainer from '../TabContainer'
import TextFields from '../DetailsContainer'
import Button from '../Button'

import { getColumns } from '../../common/utils'

class PendingApprovalTab extends Component {
  state = { open: false, selectedRows: [], selectedIndexes: [], selectedRow: {} }

  onToggle = () => {
    this.setState((prevState) => ({
      ...prevState,
      open: !prevState.open,
    }))
  }

  onApprove = () => {
    // Make API Call
    this.props.approveRows(this.state.selectedRows)
    this.setState((prevState) => ({
      open: !prevState.open,
      selectedRows: [],
      selectedIndexes: [],
    }))
  }

  onRowsSelected = (rows, selectedIndexes) => {
    this.setState((prevState) => ({
      ...prevState,
      selectedRows: rows,
      selectedIndexes,
    }))
  }

  onRowClicked = (row) => {
    this.setState({
      selectedRow: row,
    })
  }

  render() {
    const {} = this.props
    return (
      <TabContainer>
        <Button variant="contained" color="primary" onClick={this.onToggle}>
          Approve
        </Button>
        <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
          Reject
        </Button>
        <AlertDialog
          open={this.state.open}
          onClose={this.onToggle}
          message="Approve the request"
          onReject={this.onToggle}
          onApprove={this.onApprove}
        />
        <DataGrid
          columns={getColumns()}
          rowKey="firstTabRows"
          selectedIndexes={this.state.selectedIndexes}
          onRowsSelected={this.onRowsSelected}
          onRowClicked={this.onRowClicked}
        />
        <SimpleAppBar />
        <TextFields selectedRow={this.state.selectedRow} />
        <TextareaPage />
      </TabContainer>
    )
  }
}

export default PendingApprovalTab
