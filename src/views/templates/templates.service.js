import { templateData, previewData } from '~/common/constants'
//import { createPostRequest } from '~/common/http'

export function getOpenModalData() {
  return Promise.resolve(templateData)
}

export function getPreviewTemplateData(name, version) {
  //return Promise.resolve(previewData({ name, version }))
  return Promise.resolve(previewData)
}
