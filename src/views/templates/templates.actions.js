import { LOAD_PREVIEW_TEMPLATE_DATA, OPEN_MODAL } from './templates.constants'

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
