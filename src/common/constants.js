export const templateData = [
  { templateName: 'groupOne', templateVersion: [0, 1, 2, 3, 4] },
  { templateName: 'groupTwo', templateVersion: [0] },
  { templateName: 'groupThree', templateVersion: [0, 1, 2] },
  { templateName: 'groupFour', templateVersion: [0, 1, 2, 3, 4, 5, 6] },
]

export const previewData = {
  templateName: 'groupOne',
  templateVersion: 0,
  body:
    '<html><head><title>Hello</title><body><p>{{my_string}}</p><h1>second heading</h1><p>{{hello_string}}</p></body></head></html>',
  to: 'harika@gmail.com',
  from: ['anil@gmail.com', 'dad@gmail.com', 'mom@gmail.com'],
  cc: ['harika@gmail.com', 'anil@gmail.com'],
  bcc: ['anil@gmail.com'],
  subject: 'This is test',
  replyTo: 'harika1@gmail.com',
  group: 'quackr',
  batched: true,
  instantAction: true,
}

export const defaultsData = {
  new_jinja_args: { my_string: 'hello', hello_string: 'none', number_string: [0, 1, 2, 3, 4] },
}

export const previewModalData = {
  body: '<html><head><title>Hello</title><body><p>Hello</p></body></head></html>',
}

export const categoryData = [
  {
    name: 'quackr',
  },
  {
    name: 'FICC',
  },
  {
    name: 'FICCDTG',
  },
  {
    name: 'GBAM',
  },
]

export const saveGridData = [
  {
    name: 'groupsix',
    group: 'quackr',
    version: '7',
  },
  {
    name: 'groupseven',
    group: 'FICCDTG',
    version: '7',
  },
  {
    name: 'groupeight',
    group: 'GBAM',
    version: '4',
  },
]
