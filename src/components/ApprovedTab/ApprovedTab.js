import React, { Component } from 'react'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'

import DataGrid from '../Grids'
import SimpleAppBar from '../AppBar'
import TextareaPage from '../TextArea'
import TabContainer from '../TabContainer'
import TextFields from '../DetailsContainer'

import { getColumns } from '../../common/utils'

class ApprovedTab extends Component {
  state = { selectedRows: [], selectedIndexes: [] }

  onRowsSelected = (rows, selectedIndexes) => {
    this.setState((prevState) => ({
      ...prevState,
      selectedRows: rows,
      selectedIndexes,
    }))
  }

  render() {
    const {} = this.props
    return (
      <TabContainer>
        <DataGrid
          columns={getColumns()}
          rowKey="secondTabRows"
          selectedIndexes={this.state.selectedIndexes}
          onRowsSelected={this.onRowsSelected}
        />
        <SimpleAppBar />
        <TextFields />
        <TextareaPage />
      </TabContainer>
    )
  }
}

export default ApprovedTab
