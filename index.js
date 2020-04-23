const express = require('express')
const app = express()

const port = 3003
const message = `Service is running on port ${port}.`
const server = app.listen(port, () => { console.log(message) })
server.setTimeout(1000)