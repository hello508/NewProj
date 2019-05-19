import { LOAD_FIRST_TAB_DATA, LOAD_SECOND_TAB_DATA, LOAD_THIRD_TAB_DATA, APPROVE_ROWS } from './home.constants';

import * as homeServices from './home.service';

export function getFirstTabData() {
  return (dispatch) => {
    homeServices.getFirstTabData().then((rows) => {
      dispatch({
        type: LOAD_FIRST_TAB_DATA,
        rows,
      });
    });
  };
}

export function getSecondTabData() {
  return (dispatch) => {
    homeServices.getSecondTabData().then((rows) => {
      dispatch({
        type: LOAD_SECOND_TAB_DATA,
        rows,
      });
    });
  };
}

export function getThirdTabData() {
  return (dispatch) => {
    homeServices.getThirdTabData().then((rows) => {
      dispatch({
        type: LOAD_THIRD_TAB_DATA,
        rows,
      });
    });
  };
}

export function approveRows(selectedRows) {
  return (dispatch) => {
    homeServices
      .approveRows(selectedRows)
      .then((response) => {
        dispatch({
          type: APPROVE_ROWS,
          selectedRows,
        });
      })
      .catch((err) => {
        // show snackbar
      });
  };
}
