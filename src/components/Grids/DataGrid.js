import React, { Component } from 'react'
import ReactDataGrid from 'react-data-grid'
import { Toolbar, Data } from 'react-data-grid-addons'

export default class DataGrid extends Component {
  static defaultProps = {
    rows: [],
    filters: {},
    sortColumn: {},
    sortDirection: 'ASC',
  }
  constructor(props) {
    super(props)
    this.state = {
      /* Columns are defined with key , name, filterable and resizable options*/
      columns: [
        {
          key: 'a',
          name: 'A',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'b',
          name: 'B',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'c',
          name: 'C',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'd',
          name: 'D',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'e',
          name: 'E',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'f',
          name: 'F',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'g',
          name: 'G',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'h',
          name: 'H',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'i',
          name: 'I',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'h',
          name: 'H',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'i',
          name: 'I',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'h',
          name: 'H',
          resizable: true,
          sortable: true,
          filterable: true,
        },
        {
          key: 'i',
          name: 'I',
          resizable: true,
          sortable: true,
          filterable: true,
        },
      ],
      rows: props.data,
      filters: props.filters,
      sortColumn: props.sortColumn,
      sortDirection: props.sortDirection,
    }
  }

  /* This function will set rows based on the data listed*/
  rowGetter = (rowIndex) => {
    const data = this.getRows(),
      rowData = data[rowIndex]
    return rowData
  }

  getRows = () => {
    return Data.Selectors.getRows(this.state)
  }

  /* This function will set size based on the data length*/
  getSize = () => {
    return this.getRows().length
  }

  // handles filters
  handleFilterChange = (filter) => {
    const newFilters = Object.assign({}, this.state.filters)
    if (filter.filterTerm) {
      newFilters[filter.column.key] = filter
    } else {
      delete newFilters[filter.column.key]
    }
    this.setState({ filters: newFilters })
  }

  onClearFilters = () => {
    this.setState({ filters: {} })
  }

  // handles sorting
  handleGridSort = (sortColumn, sortDirection) => {
    this.setState({ sortColumn: sortColumn, sortDirection: sortDirection })
  }

  // handles row selection
  onRowsSelected = (rows) => {
    const selectedIndexes = this.props.selectedIndexes.concat(rows.map((r) => r.rowIdx))
    this.props.handleSelectedIndexUpdate(selectedIndexes)

    this.setState({
      selectedIndexes,
    })
  }

  // handles row de-selection
  onRowsDeselected = (rows) => {
    const rowIndexes = rows.map((r) => r.rowIdx)
    const selectedIndexes = this.props.selectedIndexes.filter((i) => rowIndexes.indexOf(i) === -1)

    this.props.handleSelectedIndexUpdate(selectedIndexes)

    this.setState({
      selectedIndexes,
    })
  }

  render() {
    return (
      <div>
        <ReactDataGrid
          ref={(grid) => {
            this.grid = grid
          }}
          columns={this.state.columns}
          rowGetter={this.rowGetter}
          enableCellSelect={true}
          rowsCount={this.getSize()}
          minHeight={280}
          toolbar={<Toolbar enableFilter={true} />}
          onAddFilter={this.handleFilterChange}
          onClearFilters={this.onClearFilters}
          onGridSort={this.handleGridSort}
          rowSelection={{
            showCheckbox: true,
            onRowsSelected: this.onRowsSelected,
            onRowsDeselected: this.onRowsDeselected,
            selectBy: {
              indexes: this.props.selectedIndexes,
            },
          }}
        />
      </div>
    )
  }
}
