import { LOAD_PREVIEW_TEMPLATE_DATA, OPEN_MODAL } from './templates.constants'

const initialState = {
  selectedTemplateData: [],
  previewRowData: {},
}

export const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PREVIEW_TEMPLATE_DATA: {
      return {
        ...state,
        previewRowData: action.previewRowData,
      }
    }
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
    previewRowData: state.templates.previewRowData,
  }
}
