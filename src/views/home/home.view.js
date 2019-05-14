import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getData } from './home.actions'
import { mapStateToProps } from './home.selector'

class HomeView extends Component {
  componentDidMount() {
    this.props.getData()
  }
  render() {
    return (
      <div>
        {this.props.rows.map((row) => (
          <div>{`${row.name} is ${row.age} Old`}</div>
        ))}
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  {
    getData,
  }
)(HomeView)
