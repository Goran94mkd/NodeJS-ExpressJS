const Patient = require('../models/patient');
const Doctor = require('../models/doctor');

module.exports = {
  getAll: async (req, res) => {
    if (req.query.search) {
      await Patient.find({ age: { $gte: req.query.search } }, function (err, patients) {
        if (err) {
          console.log(err);
        } else {
          res.render("patients/index", { patients: patients });
        }
      }).populate('doctor');
    } else {
      await Patient.find({}, function (err, patients) {
        if (err) {
          console.log(err);
        } else {
          res.render("patients/index", { patients: patients });
        }
      }).populate('doctor');
    }
  },
  getOne: async (req, res) => {
    const patient = await Patient.findById(req.params.id)
    const doctors = await Doctor.find()

    res.render('patients/update', {
      patient,
      doctors
    })
  },
  create: async (req, res) => {
    // Prv nacin (async, await)
    const doctors = await Doctor.find()
    res.render('patients/create', { doctors })

    // Vtor nacin

    // 61 - 64 (bez async, await) go izvrsuva istoto kako 55-56 
    // Doctor.find()
    //   .then(doctors => {
    //     res.render('patients/create', {doctors})
    //   })

  },
  postCreate: async (req, res) => {
    try {
      if (req.body.doctor == '') {
        delete req.body.doctor;
      }

      const patient = new Patient(req.body);
      await patient.save();

      res.redirect('/patients');
    } catch (error) {
      console.log(error);
      res.render('patients/create', {
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

      await Patient.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
      res.redirect('/patients')
    } catch (error) {
      res.render('patients/update', {
        ...req.body,
        _id: req.params.id,
        error: error.message
      })
    }
  },
  delete: async (req, res) => {
    await Patient.findByIdAndRemove(req.params.id)

    res.send({
      error: false,
      message: `Patient with id #${req.params.id} removed`
    });
  }
};