import { LOAD_FIRST_TAB_CARD_DATA, LOAD_SECOND_TAB_CARD_DATA, LOAD_THIRD_TAB_CARD_DATA } from './cards.constants'

const initialState = {
  firstTabCardData: [],
  secondTabCardData: [],
  thirdTabCardData: [],
  notificationBadgeCount: 0,
  pendingApprovalBadgeCount: 0,
}

export const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_FIRST_TAB_CARD_DATA: {
      const { data } = action
      return {
        ...state,
        firstTabCardData: data.slice(0, data.length - 1),
        pendingApprovalBadgeCount: data[data.length - 1].totalNotification,
      }
    }
    case LOAD_SECOND_TAB_CARD_DATA: {
      return {
        ...state,
        secondTabCardData: action.data,
      }
    }
    case LOAD_THIRD_TAB_CARD_DATA: {
      const { data } = action
      return {
        ...state,
        thirdTabCardData: data.slice(0, data.length - 1),
        notificationBadgeCount: data[data.length - 1].totalNotification,
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
    notificationBadgeCount: state.cards.notificationBadgeCount,
    pendingApprovalBadgeCount: state.cards.pendingApprovalBadgeCount,
  }
}
