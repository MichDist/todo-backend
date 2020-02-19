const app = require('./app') // the actual Express app
const http = require('http')
const config = require('./utils/config')

const server = http.createServer(app)


/*


require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const Task = require('./models/task')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

morgan.token('body', (request, response) => {
  return JSON.stringify(request.body)
})

app.use(cors())
app.use(bodyParser.json())
app.use(morgan(':method :url - :body'))
app.use(express.static('build')) // Return frontend

// Unsupported Routes TODO

// Routes
// Root
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

// Get all tasks
app.get('/api/tasks', (request, response) => {
  Task.find({}).then(tasks => {
    response.json(tasks.map(task => task.toJSON()))     // Format with toJSON() 
  })
})

// Get a single task by id
app.get('/api/tasks/:id', (request, response) => {
  Task.findById(request.params.id).then(task => {
    if (task) {
    response.json(task.toJSON())
    } else { // No task for that id is found
      response.status(404).end()
    }
  })
  .catch(error => {     // ID is in wrong format
    console.log(error)
    response.status(400).send({error: 'Malformatted id'})
  }) 
})

// Delete task
app.delete('/api/tasks/:id', (request, response) => {
Task.findByIdAndRemove(request.params.id)
  .then(result => {
    response.status(204).end()
  })
  .catch(error => {
    console.log(error)
    response.status(400).send({error: 'An error occured'})
  })
})

// Add task
app.post('/api/tasks', (request, response) => {
  const task = request.body
    
    if(!task.content) {
        return response.status(400).json({
            error: 'Content is missing'
        })
    }

    const newTask = new Task({
        content: task.content,
        date: new Date(),
        important: task.important || false,
    })

    // Used promise chaining to make it loo pretty
    newTask.save()
      .then(savedTask => savedTask.toJSON())
      .then(savedAndFormattedTask => {
        response.json(savedAndFormattedTask)
      })
    .catch(error => {
      console.log(error)
    })
})

// Update Task
app.put('/api/tasks/:id', (request, response) => {
const body = request.body

const task = {
  content: body.content,
  important: body.important,
}

Task.findByIdAndUpdate(request.params.id, task, { new: true})
  .then(updatedTask => {
    response.json(updatedTask.toJSON())
  })
  .catch(error => {
    console.log(error)
    response.status(404).end()
  })
//AUSKOMMENTIEREN  const id = Number(request.params.id)
  const newTask = request.body

  tasks = tasks.map(task => {
    if(task.id === id) {
      task = newTask
    }
    return task
  })

  response.json(tasks)
  
})

// Info



const PORT = process.env.PORT || 3001
*/
server.listen(config.PORT, () => {console.log(`Server is running on port ${config.PORT}`)})
