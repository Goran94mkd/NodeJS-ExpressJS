const mongoose = require('mongoose')

const prescriptionSchema = mongoose.Schema({
  number: {
    type: String,
    required: ['Medication is a required field']
  },
  medication: {
    type: String,
    required: ['Medication is a required field']
  },
  frequency: {
    type: String,
    required: ['Frequency is a required field']
  },
  doctor: {
    type: mongoose.Types.ObjectId,
    ref: 'Doctor'
  },
  patient: {
    type: mongoose.Types.ObjectId,
    ref: 'Patient'
  }
});

module.exports = mongoose.model('Prescription', prescriptionSchema);