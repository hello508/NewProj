import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDataGrid, { Row } from 'react-data-grid'
import { Toolbar, Data } from 'react-data-grid-addons'
import { withStyles } from '@material-ui/core'

const selectors = Data.Selectors

class DataGrid extends Component {
  state = { selectedIndexes: [], rowIndex: -1, filters: {}, sortColumn: {}, sortDirection: 'ASC' }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.selectedIndexes !== nextProps.selectedIndexes) {
      return {
        selectedIndexes: nextProps.selectedIndexes,
      }
    }
    return null
  }

  _rowGetter = (id) => {
    return this.getRows()[id]
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
    if (rowIdx >= 0) {
      this.setState({
        rowIndex: rowIdx,
      })
      this.props.onRowClicked(this.getRows()[rowIdx])
    }
  }

  rowRenderer = (row) => {
    const { rowIndex } = this.state
    return <Row {...row} extraClasses={rowIndex == row.idx ? 'selected' : ''} />
  }

  handleFilterChange = (filter) => {
    const newFilters = Object.assign({}, this.state.filters)
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter
    } else {
      delete newFilters[filter.column.key]
    }
    this.setState({
      filters: newFilters,
    })
  }

  onClearFilter = () => {
    this.setState({
      filters: {},
    })
  }

  getRows = () => {
    return selectors.getRows({ rows: this.props.rows, filters: this.state.filters })
  }

  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection })
  }

  render() {
    const { columns, rowKey } = this.props
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={this._rowGetter}
        rowsCount={this.getRows().length}
        minHeight={330}
        key={rowKey}
        onRowClick={this.onRowClick}
        rowRenderer={this.rowRenderer}
        toolbar={<Toolbar enableFilter={true} />}
        onAddFilter={this.handleFilterChange}
        onClearFilters={this.onClearFilter}
        onGridSort={this.handleGridSort}
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
