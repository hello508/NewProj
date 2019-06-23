import {
  LOAD_PREVIEW_TEMPLATE_DATA,
  LOAD_DEFAULT_TAB,
  OPEN_MODAL,
  UPDATE_DEFAULT_DATA,
  UPDATE_PREVIEW_DATA,
  SUBMIT_PREVIEW_DATA,
  CLEAR_ALL_DATA,
  SAVE_MODAL_DATA,
} from './templates.constants'

const initialState = {
  selectedTemplateData: [],
  previewRowData: {},
  jinjaData: {},
  previewData: {},
  previewTemplateData: {},
  selectedSaveData: [],
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
        previewData: Object.keys(action.jinjaData.new_jinja_args).reduce(
          (acc, key) => ({
            ...acc,
            [key]: '',
          }),
          {}
        ),
      }
    }
    case OPEN_MODAL: {
      return {
        ...state,
        selectedTemplateData: action.selectedTemplateData,
      }
    }
    case UPDATE_DEFAULT_DATA: {
      const { key, value } = action
      return {
        ...state,
        jinjaData: {
          ...state.jinjaData,
          [key]: value,
        },
      }
    }
    case UPDATE_PREVIEW_DATA: {
      const { key, value } = action
      return {
        ...state,
        previewData: {
          ...state.previewData,
          [key]: value,
        },
      }
    }
    case SUBMIT_PREVIEW_DATA: {
      return {
        ...state,
        previewTemplateData: action.previewTemplateData,
      }
    }
    case CLEAR_ALL_DATA: {
      return initialState
    }
    case SAVE_MODAL_DATA: {
      return {
        ...state,
        selectedSaveData: action.selectedSaveData,
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
    previewTemplateData: state.templates.previewTemplateData,
    selectedSaveData: state.templates.selectedSaveData,
  }
}
