const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
  full_name: {
    type: String,
    required: ['Full name is a required field']
  },
  licence_number: {
    type: String,
    required: ['Licence number is a required field'],
    unique: true,
    validate: {
      validator: value => /^[A-Z]{3}-{1}[0-9]{10}$/.test(value),
      message: props => `The licence number ${props.value} is invalid`
    }
  },
  city: {
    type: String,
    required: ['City is a required field']
  },
  specialization: {
    type: String,
    required: ['Specialization is a required field']
  }
});

module.exports = mongoose.model('Doctor', doctorSchema);