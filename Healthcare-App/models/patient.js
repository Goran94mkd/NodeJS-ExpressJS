const mongoose = require('mongoose')

const patientSchema = mongoose.Schema({
  ssn: {
    type: String,
    required: ['SSN is a required field'],
    unique: true,
    validate: {
      validator: value => /^[0-9]{13}$/.test(value),
      message: props => `The ssn ${props.value} is invalid`
    }
  },
  full_name: {
    type: String,
    required: ['Full name is a required field']
  },
  age: {
    type: String,
    required: ['Age is a required field'],
    validate: {
      validator: value => /^[0-9]/.test(value),
      message: props => `The age ${props.value} is invalid`
    }
  },
  phone_number: {
    type: String,
    required: ['Phone number is a required field'],
    unique: true,
    validate: {
      validator: value => /^[0-7]{3}[0-9]{6}$/.test(value),
      message: props => `The phone number ${props.value} is invalid`
    }
  },
  city: {
    type: String,
    required: ['City is a required field']
  }
});

module.exports = mongoose.model('Patient', patientSchema);