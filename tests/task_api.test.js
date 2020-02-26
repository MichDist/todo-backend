const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const helper = require('./test_helper')

// Import application, "superagent object"
const api = supertest(app)
const Task = require('../models/task')


// Clear database and insert some test data
beforeEach(async () => {
    await Task.deleteMany({})

    let taskObject = new Task(helper.initialTasks[0])
    await taskObject.save()

    taskObject = new Task(helper.initialTasks[1])
    await taskObject.save()
})
describe('Test the initial tasks', () => {
test('Tasks are returned as json', async () => {
    await api
        .get('/api/tasks')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('All tasks are returned', async() => {
    const response = await api.get('/api/notes')

    expect(response.body.length).toBe(helper.initialTasks.length)
})

test('A specific tasks returned', async () => {
    const response = await api.get('/api/tasks')

    const contents = response.body.map(r => r.content)

    expect(contents).toContain('Testing with jest')
})
})
// Add a new task and verify that number of returned tasks increases
describe('Test adding tasks', () => {
test('New taks can be added', async () => {
    const newTask = {
        content: 'Testing adding new tasks',
        date: new Date(),
        important: true,
    }

    await api
        .post('/api/tasks')
        .send(newTask)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    // Check number of tasks
    const tasksAtEnd = await helper.tasksInDb()
    expect(tasksAtEnd.length).toBe(helper.initialTasks.length + 1)

    // Check if content is correct
    const contents = tasksAtEnd.map(n => n.content)
    expect(contents).toContain(
        'Testing adding new tasks'
    )
})
// See below ...
test('Tasks without content are not added', async () => {
    const newTask = {
        date: new Date(),
        important: false,
    }

    await api 
        .post('/api/tasks')
        .send(newTask)
        .expect(400)

    const tasksAtEnd = await helper.tasksInDb()

    expect(tasksAtEnd.length).toBe(helper.initialTasks.length)
})
})

// Fetching tasks 
describe('Test getting tasks', () => {
test('Get a single task', async () => {
    const tasksAtStart = await helper.tasksInDb()

    const taskToGet = tasksAtStart[0]

    const resultTask = await api
        .get(`/api/tasks/${taskToGet.id}`)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    expect(resultTask.body).toEqual(taskToGet)
})
})





// Delete tasks
describe('Test deleting tasks', () => {
test('Deleting a task is possible', async () => {
    const tasksAtStart = await helper.tasksInDb()
    const taskToDelete = tasksAtStart[0]

    await api
        .delete(`/api/tasks/${taskToDelete.id}`)
        .expect(204)

    const tasksAtEnd = await helper.tasksInDb()

    expect(tasksAtEnd.length).toBe(
        helper.initialTasks.length - 1
    )

    const contents = tasksAtEnd.map(r => r.content)

    expect(contents).not.toContain(taskToDelete.content)
})
})

afterAll(() => {
    mongoose.connection.close()
})