import { LOAD_FIRST_TAB_DATA, LOAD_SECOND_TAB_DATA, LOAD_THIRD_TAB_DATA } from './home.constants'

const initialState = {
  firstTabRows: [],
  secondTabRows: [],
  thirdTabRows: [],
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FIRST_TAB_DATA: {
      return {
        ...state,
        firstTabRows: action.rows,
      }
    }
    case LOAD_SECOND_TAB_DATA: {
      return {
        ...state,
        secondTabRows: action.rows,
      }
    }
    case LOAD_THIRD_TAB_DATA: {
      return {
        ...state,
        thirdTabRows: action.rows,
      }
    }
    default: {
      return state
    }
  }
}
