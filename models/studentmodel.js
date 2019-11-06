const mongoose = require('mongoose')

const StudentSchema = new mongoose.Schema({

  _id: {
    type: Number,
    required: true
  },
  Given: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Given name'
  },
  Family: {
    type: String,
    minlength: 3,
    maxlength: 100,
    required: false,
    default: 'Family name'
  },
  Email: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    unique: true
  },
  GPA: {
    type: number,
    
    required: true,
    default: '0.0'
  },
  GitHub: {
    type: String,
    minlength: 2,
    maxlength: 100,
    required: true,
    default: 'www.github.com'
  },
  Website: {
    type: String,
    minlength: 5,
    maxlength: 100,
    required: true,
    default: 'www.google.com'
  },
  SetionID: {
    type: number,
   required: true,
    default: '12'
  }
})
module.exports = mongoose.model('Developer', StudentSchema)