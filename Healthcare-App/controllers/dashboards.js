const Doctor = require('../models/doctor');
const Patient = require('../models/patient');
const Prescription = require('../models/prescription');


module.exports = {
  getAll: async (req, res) => {
    const doctors = await Doctor.find();
    const patients = await Patient.find();
    const prescriptions = await Prescription.find()
    
    res.render("index", { doctors: doctors, patients: patients, prescriptions: prescriptions });
  }
}