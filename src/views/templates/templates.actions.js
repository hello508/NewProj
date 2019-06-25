import {
  LOAD_PREVIEW_TEMPLATE_DATA,
  LOAD_DEFAULT_TAB,
  OPEN_MODAL,
  UPDATE_DEFAULT_DATA,
  UPDATE_PREVIEW_DATA,
  SUBMIT_PREVIEW_DATA,
  CLEAR_ALL_DATA,
  SAVE_MODAL_DATA,
  LOAD_CATEGORY_DATA,
  UPDATE_TEMPLATE_DATA,
  UPDATE_DEFAULT_VALUES_DATA,
} from './templates.constants'

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

export function getJinjaTemplateData(name, version, body) {
  return (dispatch) => {
    templateServices.getJinjaTemplateData(name, version, body).then((jinjaData) => {
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

export function updateJinjatFieldsData(key, value) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_DEFAULT_DATA,
      key,
      value,
    })
  }
}

export function updatePreviewFieldsData(key, value) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_PREVIEW_DATA,
      key,
      value,
    })
  }
}

export function submitPreviewFieldsData(data) {
  return (dispatch) => {
    templateServices.submitPreviewFieldsData(data).then((previewTemplateData) => {
      dispatch({
        type: SUBMIT_PREVIEW_DATA,
        previewTemplateData,
      })
    })
  }
}

export function clearAllData() {
  return (dispatch) => {
    dispatch({
      type: CLEAR_ALL_DATA,
    })
  }
}

export function getSaveModalData() {
  return (dispatch) => {
    templateServices.getSaveModalData().then((selectedSaveData) => {
      dispatch({
        type: SAVE_MODAL_DATA,
        selectedSaveData,
      })
    })
  }
}

export function getCategoryData() {
  return (dispatch) => {
    templateServices.getCategoryData().then((categoryData) => {
      dispatch({
        type: LOAD_CATEGORY_DATA,
        categoryData,
      })
    })
  }
}

export function updateTemplateFieldsData(key, value) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_TEMPLATE_DATA,
      key,
      value,
    })
  }
}

export function updateDefaultFieldsData(key, value) {
  return (dispatch) => {
    dispatch({
      type: UPDATE_DEFAULT_VALUES_DATA,
      key,
      value,
    })
  }
}
