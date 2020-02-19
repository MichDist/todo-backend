const mongoose = require('mongoose')

// Get url from environment variable
//const url = process.env.MONGODB_URI
/*
// Connect to MongoDB
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('Connected to MongoDB')
    })
    .catch((error) => {
        console.log('Error connecting to MongoDB:', error.message)
    })
*/
// Schema
const taskSchema = new mongoose.Schema({
    content: {
      type: String,
      minlength: 5,
      required: true
    },
    date: {
      type: Date,
      reqquired: true
    },
    important: Boolean,
    subtask: Object
  })
  
// Modify toJSON method to remove __v and use id instead of _id
taskSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

// Export model
module.exports = mongoose.model('Task', taskSchema)