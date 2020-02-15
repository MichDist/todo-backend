const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')

app.use(cors())
app.use(bodyParser.json())

let tasks = 
    [
      {
        "id": 1,
        "content": "Create MERN App",
        "date": "2020-02-03",
        "important": true,
        "subtasks": [
          {
            "id": 1,
            "content": "Build Frontend",
            "mainTask": 1
          },
          {
            "id": 2,
            "content": "Build Backend",
            "mainTask": 1
          }
        ]
      },
      {
        "id": 2,
        "content": "Test App",
        "date": "2020-02-03",
        "important": false,
        "subtasks": [
          {
            "id": 3,
            "content": "Learn about Unit Tests",
            "mainTask": 2
          },
          {
            "id": 4,
            "content": "Try out Cypress.io",
            "mainTask": 2
          }
        ]
      },
      {
        "id": 3,
        "content": "Task without Subtasks",
        "date": "2020-02-07",
        "important": false
      },
      {
        "id": 4,
        "content": "Some new task",
        "date": "2020-02-10T20:55:41.474Z",
        "important": true
      }
    ]
  
// Routes
// Root
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

// Get all tasks
app.get('/api/tasks', (request, response) => {
    response.json(tasks)
})

// Get a single task by id
app.get('/api/tasks/:id', (request, response) => {
    const id = Number(request.params.id)            // request returns string instead of integer
    const task = tasks.find(task => task.id === id)

    // Response, check if task exists
    if(task) {
        response.json(task)
    } else {
        response.status(404).end()
    }
    
})

// Delete task
app.delete('/api/tasks/:id', (request, response) => {
    const id = Number(request.params.id)
    tasks = tasks.find(task => task.id !== id)

    // Response
    response.status(204).end()
})

// Add task
app.post('/api/tasks', (request, response) => {
  const task = request.body
    

    if(!task.content) {
        return response.status(400).json({
            error: 'Content is missing'
        })
    }

    const newTask = {
        id: 10,
        content: task.content,
        date: new Date(),
        important: task.important || false,
    }

    tasks = tasks.concat(newTask)

    // Response
    response.json(task)
})

// Info

// Define port
const port = 3001
app.listen(port, () => {console.log(`Server is running on port ${port}`)})
