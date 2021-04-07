var express = require('express');
const doctors = require('../controllers/doctors');
var router = express.Router();
const doctorsController = require('../controllers/doctors');
const patientsController = require('../controllers/patients');

router
  .get('/', (req, res) => {
    res.render('index', { title: 'Express' });
  })
  .get('/doctors', doctorsController.getAll )
  .get('/doctors/create', doctorsController.create)
  .get('/doctors/:id', doctorsController.getOne)
  .post('/doctors', doctorsController.postCreate)
  .post('/doctors/:id', doctorsController.postUpdate)
  .delete('/doctors/:id', doctorsController.delete)
  .get('/patients', patientsController.getAll)
  .get('/patients/create', patientsController.create)
  .get('/patients/:id', patientsController.getOne)
  .post('/patients', patientsController.postCreate)
  .post('/patients/:id', patientsController.postUpdate)
  .delete('/patients/:id', patientsController.delete)

module.exports = router;

