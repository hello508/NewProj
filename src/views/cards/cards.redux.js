import { LOAD_FIRST_TAB_CARD_DATA, LOAD_SECOND_TAB_CARD_DATA, LOAD_THIRD_TAB_CARD_DATA } from './cards.constants'

const initialState = {
  firstTabCardData: [],
  secondTabCardData: [],
  thirdTabCardData: [],
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FIRST_TAB_CARD_DATA: {
      return {
        ...state,
        firstTabCardData: action.data,
      }
    }
    case LOAD_SECOND_TAB_CARD_DATA: {
      return {
        ...state,
        secondTabCardData: action.data,
      }
    }
    case LOAD_THIRD_TAB_CARD_DATA: {
      return {
        ...state,
        thirdTabCardData: action.data,
      }
    }
    default: {
      return state
    }
  }
}

export const cardsSelector = (state) => {
  return {
    firstTabCardData: state.cards.firstTabCardData,
    secondTabCardData: state.cards.secondTabCardData,
    thirdTabCardData: state.cards.thirdTabCardData,
  }
}
