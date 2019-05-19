import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactDataGrid from 'react-data-grid'

class DataGrid extends Component {
  _rowGetter = (id) => {
    return this.props.rows[id]
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
