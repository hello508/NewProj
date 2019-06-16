import { LOAD_PREVIEW_TEMPLATE_DATA, OPEN_MODAL } from './templates.constants'

const initialState = {
  selectedTemplateData: [],
}

export const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL: {
      return {
        ...state,
        selectedTemplateData: action.selectedTemplateData,
      }
    }
    default: {
      return state
    }
  }
}

export const templatesSelector = (state) => {
  return {
    selectedTemplateData: state.templates.selectedTemplateData,
  }
}
