import React, { Component } from 'react';
import {connect} from 'react-redux';
import ReactDataGrid from 'react-data-grid';

class DataGrid extends Component {
  _rowGetter = id => {
    return this.props.rows[id];
  };

  render() {
    const { columns } = this.props;
    return (
      <ReactDataGrid
        columns={columns}
        rowGetter={this._rowGetter}
        rowsCount={this.props.rows.length}
        minHeight={500}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    rows: state.home[ownProps.rowKey],
  }
}

export default connect(mapStateToProps)(DataGrid);
