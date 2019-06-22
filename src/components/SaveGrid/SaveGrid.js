import React, { Component } from 'react'
import ReactDataGrid, { Row } from 'react-data-grid'
import { withStyles } from '@material-ui/core'

class SaveDataGrid extends Component {
  state = { selectedIndexes: [], rowIndex: -1 }

  _rowGetter = (id) => {
    return this.props.groupdData[id]
  }

  onRowClick = (rowIdx) => {
    if (rowIdx >= 0) {
      this.setState({
        rowIndex: rowIdx,
      })
      this.props.onRowClicked(this.props.groupdData[rowIdx])
    }
  }

  rowRenderer = (row) => {
    const { rowIndex } = this.state
    return <Row {...row} extraClasses={rowIndex == row.idx ? 'selected' : ''} />
  }

  render() {
    const { columns, groupdData } = this.props
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={this._rowGetter}
        rowsCount={this.groupdData.length}
        minHeight={330}
        onRowClick={this.onRowClick}
        rowRenderer={this.rowRenderer}
        rowSelection={{
          enableShiftSelect: false,
          showCheckbox: true,
        }}
      />
    )
  }
}

export default SaveDataGrid
