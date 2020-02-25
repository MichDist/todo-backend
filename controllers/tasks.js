const tasksRouter = require('express').Router()
const Task = require('../models/task')

// Unsupported Routes TODO

// Routes
// Get all tasks
/*tasksRouter.get('/', (request, response) => {
  Task.find({}).then(tasks => {
    response.json(tasks.map(task => task.toJSON()))     // Format with toJSON() 
  })
})
*/
// A version of get all tasks using async await
tasksRouter.get('/', async (request, response) => {
  const tasks = await Task.find({})
  response.json(tasks.map(task => task.toJSON()))
})

// Get a single task by id
tasksRouter.get('/:id', (request, response) => {
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
tasksRouter.delete('/:id', (request, response) => {
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
tasksRouter.post('/', (request, response) => {
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
tasksRouter.put('/:id', (request, response) => {
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
/*  const id = Number(request.params.id)
  const newTask = request.body

  tasks = tasks.map(task => {
    if(task.id === id) {
      task = newTask
    }
    return task
  })

  response.json(tasks)
  */
})

// Info


module.exports = tasksRouter
