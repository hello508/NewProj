import { templateData, previewData, defaultsData } from '~/common/constants'
//import { createPostRequest } from '~/common/http'

export function getOpenModalData() {
  return Promise.resolve(templateData)
}

export function getPreviewTemplateData(name, version) {
  //return Promise.resolve(previewData({ name, version }))
  return Promise.resolve(previewData)
}

export function getDefaultTemplateData(name, version, body) {
  //return Promise.resolve(previewData({ name, version }))
  return Promise.resolve(defaultsData)
}
