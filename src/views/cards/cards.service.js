import faker from 'faker'

function createFakeRow() {
  return {
    groupName: faker.address.county(),
    assignedToMe: Math.ceil(Math.random() * 100),
    delegatedToMe: Math.ceil(Math.random() * 100),
  }
}

export default function createCardData(count) {
  return [...Array(count).keys()].map((i) => createFakeRow(i))
}

export function getFirstTabCardData() {
  return Promise.resolve(createCardData(3))
}

export function getSecondTabCardData() {
  return Promise.resolve(createCardData(4))
}

export function getThirdTabCardData() {
  return Promise.resolve(createCardData(5))
}
