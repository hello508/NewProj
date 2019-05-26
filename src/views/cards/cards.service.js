import faker from 'faker';
import { createPostRequest } from '~/common/http';

function createFakeRow() {
  return {
    groupName: faker.address.county(),
    assignedToMe: Math.ceil(Math.random() * 100),
    delegatedToMe: Math.ceil(Math.random() * 100),
  };
}

export default function createCardData(count) {
  return [...Array(count).keys()].map(i => createFakeRow(i));
}

export function getFirstTabCardData() {
  /**
   // { data: [{}] }, [{}]
   return createPostRequest({ type: 'Pending Approval' });
  */
  return Promise.resolve(createCardData(3));
}

export function getSecondTabCardData() {
  return Promise.resolve(createCardData(4));
}

export function getThirdTabCardData() {
  return Promise.resolve(createCardData(5));
}
