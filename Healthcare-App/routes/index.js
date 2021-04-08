var express = require("express");
var router = express.Router();
const Doctor = require("../models/doctor");
const Patient = require("../models/patient");
const doctorsController = require('../controllers/doctors');
const patientsController = require('../controllers/patients')

router
  .get("/", (req, res) => {
    res.render("index", { title: "Express" });
  })
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
  
module.exports = router;