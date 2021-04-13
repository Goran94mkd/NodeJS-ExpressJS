const Patient = require('../models/patient');
const Doctor = require('../models/doctor');
const Prescription = require('../models/prescription');

module.exports = {
  getAll: async (req, res) => {
    const prescriptions = await Prescription.find().populate('doctor').populate('patient')

    res.render('prescriptions/index', { prescriptions: prescriptions })
  },
  getOne: async (req, res) => {
    const prescription = await Prescription.findById(req.params.id)
    const doctors = await Doctor.find()
    const patients = await Patient.find()

    res.render('prescriptions/update', {
      prescription,
      doctors,
      patients
    })
  },
  create: async (req, res) => {
    const doctors = await Doctor.find()
    const patients = await Patient.find()

    res.render('prescriptions/create', { doctors, patients })
  },
  postCreate: async (req, res) => {
    try {
      if (req.body.doctor == '') {
        delete req.body.doctor;
      }
      if (req.body.patient == '') {
        delete req.body.patient
      }
    
      const prescription = new Prescription(req.body);
      await prescription.save();

      res.redirect('/prescriptions');
    } catch (error) {
      console.log(error);
      res.render('prescriptions/create', {
        ...req.body,
        error: error.message
      });
    }
  },
  postUpdate: async (req, res) => {
    try {
      if (req.body.doctor == '') {
        req.body.doctor = null
      }
      if (req.body.patient == '') {
        req.body.patient = null
      }

      await Prescription.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
      res.redirect('/prescriptions')
    } catch (error) {
      res.render('prescriptions/update', {
        ...req.body,
        _id: req.params.id,
        error: error.message
      })
    }
  },
  delete: async (req, res) => {
    await Prescription.findByIdAndRemove(req.params.id)

    res.send({
      error: false,
      message: `Prescription with id #${req.params.id} removed`
    });
  }
}