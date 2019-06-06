import { LOAD_FIRST_TAB_DATA, LOAD_SECOND_TAB_DATA, LOAD_THIRD_TAB_DATA, APPROVE_ROWS } from './home.constants'

const initialState = {
  firstTabRows: [],
  secondTabRows: [],
  thirdTabRows: [],
  approvedRows: [],
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
    case APPROVE_ROWS: {
      return {
        ...state,
        approvedRows: action.approvedRows,
      }
    }
    default: {
      return state
    }
  }
}
