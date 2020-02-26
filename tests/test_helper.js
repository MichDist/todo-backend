const Task = require('../models/task')

const initialTasks = [
    { 
       content: 'Testing with jest',
       important: false,
    },
    {
        content: 'A second task',
        important: true,
    },
]

const nonExistingId = async () => {
  const task = new Task({ content: 'Some content' })
  await task.save()
  await task.remove()

  return task._id.toString()
}

const tasksInDb = async () => {
  const tasks = await Task.find({})
  return tasks.map(task => task.toJSON())
}

module.exports = {
  initialTasks, nonExistingId, tasksInDb
}