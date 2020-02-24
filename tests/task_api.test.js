const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')

// Import application, "superagent object"
const api = supertest(app)
const Task = require('../models/task')

const initialTasks = [
    { 
       content: 'Testing with jest',
       date: new Date(),
       important: false,
    },
    {
        content: 'A second task',
        date: new Date(),
        important: true,
    },
]

// Clear database and insert some test data
beforeEach(async () => {
    await Task.deleteMany({})

    let taskObject = new Task(initialTasks[0])
    await taskObject.save()

    taskObject = new Task(initialTasks[1])
    await taskObject.save()
})

test('Tasks are returned as json', async () => {
    await api
        .get('/api/tasks')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('All tasks are returned', async() => {
    const response = await api.get('/api/notes')

    expect(response.body.length).toBe(initialTasks.length)
})

test('A specific tasks returned', async () => {
    const response = await api.get('/api/tasks')

    const contents = response.body.map(r => r.content)

    expect(contents).toContain('Testing with jest')
})

afterAll(() => {
    mongoose.connection.close()
})