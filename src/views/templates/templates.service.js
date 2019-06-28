import {
  templateData,
  previewData,
  defaultsData,
  previewModalData,
  saveGridData,
  categoryData,
  saveButtonData,
} from '~/common/constants'

export function getOpenModalData() {
  return Promise.resolve(templateData)
}

export function getPreviewTemplateData(name, version) {
  //return Promise.resolve(previewData({ name, version }))
  return Promise.resolve(previewData)
}

export function getJinjaTemplateData(name, version, body) {
  //return Promise.resolve(previewData({ name, version }))
  return Promise.resolve(defaultsData)
}

export function submitPreviewFieldsData(data, body) {
  //return Promise.resolve(previewData({ JinjaArgs: data, body }))
  return Promise.resolve(previewModalData)
}

export function getSaveModalData() {
  return Promise.resolve(saveGridData)
}

export function getCategoryData() {
  return Promise.resolve(categoryData)
}

export function submitSaveFieldsData(data) {
  return Promise.resolve(saveButtonData)
}
