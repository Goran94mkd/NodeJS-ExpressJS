var express = require("express");
var router = express.Router();
const doctorsController = require('../controllers/doctors');
const patientsController = require('../controllers/patients');
const prescriptionController = require('../controllers/prescriptions');
const dashboardController = require('../controllers/dashboards');



router
  .get("/", dashboardController.getAll)
  
  .get("/doctors", doctorsController.getAll)
  .get("/doctors/create", doctorsController.create)
  .get("/doctors/:id", doctorsController.getOne)
  .post("/doctors", doctorsController.postCreate)
  .post("/doctors/:id", doctorsController.postUpdate)
  .delete("/doctors/:id", doctorsController.delete)

  .get("/patients", patientsController.getAll)
  .get("/patients/create", patientsController.create)
  .get("/patients/:id", patientsController.getOne)
  .post("/patients", patientsController.postCreate)
  .post("/patients/:id", patientsController.postUpdate)
  .delete("/patients/:id", patientsController.delete)

  .get('/doctors/:id/patients', doctorsController.patients)

  .get("/prescriptions", prescriptionController.getAll)
  .get("/prescriptions/create", prescriptionController.create)
  .get("/prescriptions/:id", prescriptionController.getOne)
  .post("/prescriptions", prescriptionController.postCreate)
  .post("/prescriptions/:id", prescriptionController.postUpdate)
  .delete("/prescriptions/:id", prescriptionController.delete)

  

module.exports = router;