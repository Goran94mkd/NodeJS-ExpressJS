var express = require('express');
var router = express.Router();
const Doctor = require('../models/doctor');
const Patient = require('../models/patient');

router
  .get('/', (req, res) => {
    res.render('index', { title: 'Express' });
  })
  .get('/doctors', async (req, res) => {
    const doctors = await Doctor.find();

    res.render('doctors/index', { doctors: doctors });
  })
  .get('/doctors/create', (req, res) => {
    res.render('doctors/create');
  })
  .get('/doctors/:id', async (req, res) => {
    const doctor = await Doctor.findById(req.params.id)

    res.render('doctors/update', doctor)
  })
  .post('/doctors', async (req, res) => {
    try {
      const doctor = new Doctor(req.body)
      await doctor.save()

      res.redirect('/doctors')
    } catch (error) {
      res.render('doctors/create', {
        ...req.body,
        error: error.message
      })
    }
  })
  .post('/doctors/:id', async (req, res) => {
    try {
      await Doctor.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
      res.redirect('/doctors')
    } catch (error) {
      res.render('doctors/update', {
        ...req.body,
        _id: req.params.id,
        error: error.message
      })
    }
  })
  .get('/patients', async (req, res) => {
    const patients = await Patient.find().populate('doctor')

    res.render('patients/index', { patients: patients })
  })
  .get('/patients/create', async (req, res) => {
    // Prv nacin (async, await)
    const doctors = await Doctor.find()
    res.render('patients/create', { doctors })

    // Vtor nacin

    // 61 - 64 (bez async, await) go izvrsuva istoto kako 55-56 
    // Doctor.find()
    //   .then(doctors => {
    //     res.render('patients/create', {doctors})
    //   })

  })
  .get('/patients/:id', async (req, res) => {
    const patient = await Patient.findById(req.params.id)
    const doctors = await Doctor.find()

    res.render('patients/update', {
      patient,
      doctors
    })
  })
  .post('/patients', async (req, res) => {
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
  })
  .post('/patients/:id', async (req, res) => {
    try {
      await Patient.findByIdAndUpdate(req.params.id, req.body, { runValidators: true })
      res.redirect('/patients')
    } catch (error) {
      res.render('patients/update', {
        ...req.body,
        _id: req.params.id,
        error: error.message
      })
    }
  })
  .delete('/doctors/:id', async (req, res) => {
    // TODO: try catch
    await Doctor.findByIdAndRemove(req.params.id)

    res.send({
      error: false,
      message: `Doctor with id #${req.params.id} removed`
    });
  })
  .delete('/patients/:id', async (req, res) => {
    await Patient.findByIdAndRemove(req.params.id)

    res.send({
      error: false,
      message: `Patient with id #${req.params.id} removed`
    });
  })

module.exports = router;

module.exports = router;
