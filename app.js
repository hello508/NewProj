const express = require('express')
const path = require('path')
const app = express()

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'dist')))

// Handles any requests that don't match the ones above
app.use('*', express.static(path.join(__dirname, 'index.html', 'dist')))
// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'dist', 'index.html'))
// })