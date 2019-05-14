import faker from 'faker';

function createFakeRow(index) {
  return {
    id: index,
    avartar: faker.image.avatar(),
    county: faker.address.county(),
    email: faker.internet.email(),
    title: faker.name.prefix(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    street: faker.address.streetName(),
    zipCode: faker.address.zipCode(),
    date: faker.date.past().toLocaleDateString(),
    jobTitle: faker.name.jobTitle(),
    catchPhrase: faker.company.catchPhrase(),
    companyName: faker.company.companyName(),
    jobArea: faker.name.jobArea(),
    jobType: faker.name.jobType(),
  };
}

export default function createRowData(count) {
  return [...Array(count).keys()].map(i => createFakeRow(i));
}

export function getFirstTabData() {
  return Promise.resolve(createRowData(1000));
}

export function getSecondTabData() {
  return Promise.resolve(createRowData(500));
}

export function getThirdTabData() {
  return Promise.resolve(createRowData(300));
}
