import { templateData, previewData, defaultsData, previewModalData } from '~/common/constants'
import faker from 'faker'

function createFakeRow(index) {
  return {
    id: index,
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    jobTitle: faker.name.jobTitle(),
  }
}

export default function createRowData(count) {
  return [...Array(count).keys()].map((i) => createFakeRow(i))
}

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

export function submitPreviewFieldsData(data) {
  //return Promise.resolve(previewData({ name, version }))
  return Promise.resolve(previewModalData)
}

export function getSaveModalData() {
  return Promise.resolve(createRowData(100))
}
