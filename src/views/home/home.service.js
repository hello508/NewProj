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

function constructURL(params) {
  return Object.keys(params)
    .map((key) => key + '=' + params[key])
    .join('&');
}

export default function createRowData(count) {
  return [...Array(count).keys()].map((i) => createFakeRow(i));
}

export function getFirstTabData(params) {
  console.log(constructURL(params));
  /*
  https://www.amazon.com?tab=tabOne&groupName=Cambridgeshire&filter=assignedToMe
  fetch(`${BASE_URL}?${constructURL(params)}).then((response) => response.json()).then((json) => {
    return json;
  })
  */
  return Promise.resolve(createRowData(1000));
}

export function getSecondTabData(params) {
  console.log(constructURL(params));
  return Promise.resolve(createRowData(500));
}

export function getThirdTabData(params) {
  console.log(constructURL(params));
  return Promise.resolve(createRowData(300));
}

export function approveRows() {
  // fetch(URL_CONFIG)
  return Promise.resolve({ success: true });
}
