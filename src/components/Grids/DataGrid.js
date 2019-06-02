import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDataGrid from 'react-data-grid'

class DataGrid extends Component {
  state = { selectedIndexes: [] }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.selectedIndexes !== nextProps.selectedIndexes) {
      return {
        selectedIndexes: nextProps.selectedIndexes,
      }
    }
    return null
  }

  _rowGetter = (id) => {
    return this.props.rows[id]
  }

  onRowsSelected = (rows) => {
    const selectedIndexes = this.state.selectedIndexes.concat(rows.map((r) => r.rowIdx))
    this.setState(
      (prevState) => ({
        ...prevState,
        selectedIndexes,
      }),
      () => {
        this.props.onRowsSelected(selectedIndexes.map((index) => this.props.rows[index]), selectedIndexes)
      }
    )
  }

  onRowsDeselected = (rows) => {
    const rowIndexes = rows.map((r) => r.rowIdx)
    const selectedIndexes = this.state.selectedIndexes.filter((i) => rowIndexes.indexOf(i) === -1)
    this.setState(
      (prevState) => ({
        ...prevState,
        selectedIndexes,
      }),
      () => {
        this.props.onRowsSelected(selectedIndexes.map((index) => this.props.rows[index]), selectedIndexes)
      }
    )
  }

  onRowClick = (rowIdx) => {
    this.props.onRowClicked(this.props.rows[rowIdx])
  }

  render() {
    const { columns, rowKey } = this.props
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={this._rowGetter}
        rowsCount={this.props.rows.length}
        minHeight={330}
        key={rowKey}
        onRowClick={this.onRowClick}
        rowSelection={{
          enableShiftSelect: false,
          showCheckbox: true,
          onRowsSelected: this.onRowsSelected,
          onRowsDeselected: this.onRowsDeselected,
          selectBy: {
            indexes: this.state.selectedIndexes,
          },
        }}
      />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rows: state.home[ownProps.rowKey],
  }
}

export default connect(mapStateToProps)(DataGrid)
