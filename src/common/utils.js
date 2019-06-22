export function getColumns() {
  const defaultColumnProperties = {
    resizable: true,
    width: 250,
    filterable: true,
    sortable: true,
  }

  const columns = [
    {
      key: 'title',
      name: 'Title',
    },
    {
      key: 'firstName',
      name: 'First Name',
    },
    {
      key: 'lastName',
      name: 'Last Name',
    },
    {
      key: 'email',
      name: 'Email',
    },
    {
      key: 'street',
      name: 'Street',
    },
    {
      key: 'zipCode',
      name: 'ZipCode',
    },
    {
      key: 'date',
      name: 'Date',
    },
    {
      key: 'jobTitle',
      name: 'Job Title',
    },
    {
      key: 'catchPhrase',
      name: 'Catch Phrase',
    },
    {
      key: 'jobArea',
      name: 'Job Area',
    },
  ].map((c) => ({ ...c, ...defaultColumnProperties }))
  return columns
}

export function getSaveColumns() {
  const columns = [
    {
      key: 'firstName',
      name: 'First Name',
    },
    {
      key: 'lastName',
      name: 'Last Name',
    },
    {
      key: 'jobTitle',
      name: 'Job Title',
    },
  ].map((c) => ({ ...c }))
  return columns
}
