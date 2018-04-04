'use strict'
const express = require('express')
const app = express()
app.use(express.static('./'))
const port = 8080
app.listen(port, () => {
  console.log('start is m96dev/srv.js')
  console.log('Express Server http://localhost:' + port)
})
