import { LOAD_PREVIEW_TEMPLATE_DATA, LOAD_DEFAULT_TAB, LOAD_PREVIEW_TAB, OPEN_MODAL } from './templates.constants'

import * as templateServices from './templates.service'

export function getPreviewTemplateData(name, version) {
  return (dispatch) => {
    templateServices.getPreviewTemplateData(name, version).then((previewRowData) => {
      dispatch({
        type: LOAD_PREVIEW_TEMPLATE_DATA,
        previewRowData,
      })
    })
  }
}

export function getDefaultTemplateData(name, version, body) {
  return (dispatch) => {
    templateServices.getDefaultTemplateData(name, version, body).then((jinjaData) => {
      dispatch({
        type: LOAD_DEFAULT_TAB,
        jinjaData,
      })
    })
  }
}

export function getOpenModalData() {
  return (dispatch) => {
    templateServices.getOpenModalData().then((selectedTemplateData) => {
      dispatch({
        type: OPEN_MODAL,
        selectedTemplateData,
      })
    })
  }
}
