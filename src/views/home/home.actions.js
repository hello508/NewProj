import { LOAD_FIRST_TAB_DATA, LOAD_SECOND_TAB_DATA, LOAD_THIRD_TAB_DATA, APPROVE_ROWS } from './home.constants'

import * as homeServices from './home.service'

export function getFirstTabData(params) {
  return (dispatch) => {
    homeServices.getFirstTabData(params).then((rows) => {
      dispatch({
        type: LOAD_FIRST_TAB_DATA,
        rows,
      })
    })
  }
}

export function getSecondTabData(params) {
  return (dispatch) => {
    homeServices.getSecondTabData(params).then((rows) => {
      dispatch({
        type: LOAD_SECOND_TAB_DATA,
        rows,
      })
    })
  }
}

export function getThirdTabData(params) {
  return (dispatch) => {
    homeServices.getThirdTabData(params).then((rows) => {
      dispatch({
        type: LOAD_THIRD_TAB_DATA,
        rows,
      })
    })
  }
}

export function approveRows(selectedRows, tab, groupName) {
  return (dispatch) => {
    homeServices
      .approveRows(selectedRows)
      .then((approvedRows) => {
        dispatch({
          type: APPROVE_ROWS,
          approvedRows,
        })
        dispatch(getFirstTabData({ tab, groupName }))
      })
      .catch((err) => {
        // show snackbar
      })
  }
}
