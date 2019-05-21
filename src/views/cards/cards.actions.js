import { LOAD_FIRST_TAB_CARD_DATA, LOAD_SECOND_TAB_CARD_DATA, LOAD_THIRD_TAB_CARD_DATA } from './cards.constants'

import * as cardServices from './cards.service'

export function getFirstTabCardData() {
  return (dispatch) => {
    cardServices.getFirstTabCardData().then((data) => {
      dispatch({
        type: LOAD_FIRST_TAB_CARD_DATA,
        data,
      })
    })
  }
}

export function getSecondTabCardData() {
  return (dispatch) => {
    cardServices.getSecondTabCardData().then((data) => {
      dispatch({
        type: LOAD_SECOND_TAB_CARD_DATA,
        data,
      })
    })
  }
}

export function getThirdTabCardData() {
  return (dispatch) => {
    cardServices.getThirdTabCardData().then((data) => {
      dispatch({
        type: LOAD_THIRD_TAB_CARD_DATA,
        data,
      })
    })
  }
}
