import React from 'react'
import { render } from 'react-dom'
import App from './App'

const root = document.createElement('div')
document.body.appendChild(root)
document.body.style.margin = '0px'
document.head.innerHTML =
  '<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.3/toastr.min.css">'

render(<App />, root)
