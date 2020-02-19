const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const config = require('./utils/config')
const tasksRouter = require('./controllers/tasks')
const mongoose = require('mongoose')


console.log('Connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB')
  })
  .catch((error) => {
    console.log('Error connecting to MongoDB:', error.message)
  })

mongoose.set('useFindAndModify', false)

morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})
  
app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url - :body'))
app.use(express.static('build')) // Return frontend

app.use('/api/tasks', tasksRouter)

module.exports = app
