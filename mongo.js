const mongoose = require('mongoose')

if ( process.argv.length<3 ) {
    console.log('give password as argument')
    process.exit(1)
  }
  
const password = process.argv[2]

const url =
`mongodb+srv://TodoListUser:${password}@todo-yqrsk.mongodb.net/todo-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

// Define schema
const taskSchema = new mongoose.Schema({
    content: String,
    date: Date,
    important: Boolean,
  })
  
  // Define model
const Task = mongoose.model('Task', taskSchema)
  
const task = new Task({
  content: 'Test App',
  date: new Date(),
  important: true,
})
  
/*
Task.find({}).then(result => {
    result.forEach(note => {
        console.log(task)
    })
    mongoose.connection.close()
})
*/
  task.save().then(response => {
    console.log('Task saved!')
    mongoose.connection.close()
  })

  