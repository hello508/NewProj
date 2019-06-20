import { LOAD_PREVIEW_TEMPLATE_DATA, LOAD_DEFAULT_TAB, OPEN_MODAL } from './templates.constants'

const initialState = {
  selectedTemplateData: [],
  previewRowData: {},
  defaultData: {},
}

export const templateReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PREVIEW_TEMPLATE_DATA: {
      return {
        ...state,
        previewRowData: action.previewRowData,
      }
    }
    case LOAD_DEFAULT_TAB: {
      return {
        ...state,
        jinjaData: action.jinjaData.new_jinja_args,
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
