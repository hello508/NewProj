import React, { Component } from 'react'
import ReactDataGrid, { Row } from 'react-data-grid'
import { withStyles } from '@material-ui/core'

class SaveDataGrid extends Component {
  state = { selectedIndexes: [], rowIndex: -1 }

  _rowGetter = (id) => {
    return this.props.selectedSaveData[id]
  }

  onRowClick = (rowIdx) => {
    if (rowIdx >= 0) {
      this.setState({
        rowIndex: rowIdx,
      })
      this.props.onRowClicked(this.props.selectedSaveData[rowIdx])
    }
  }

  rowRenderer = (row) => {
    const { rowIndex } = this.state
    return <Row {...row} extraClasses={rowIndex == row.idx ? 'selected' : ''} />
  }

  render() {
    const { columns } = this.props
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={this._rowGetter}
        rowsCount={this.props.selectedSaveData.length}
        minHeight={400}
        onRowClick={this.onRowClick}
        rowRenderer={this.rowRenderer}
        rowSelection={{
          enableShiftSelect: false,
          showCheckbox: false,
        }}
      />
    )
  }
}

export default SaveDataGrid
