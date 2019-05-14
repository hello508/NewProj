import { LOAD_DATA } from './home.constants'

const initialState = {
  rows: [],
}

export const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_DATA: {
      return {
        ...state,
        rows: action.rows,
      }
    }
    default: {
      return state
    }
  }
}
