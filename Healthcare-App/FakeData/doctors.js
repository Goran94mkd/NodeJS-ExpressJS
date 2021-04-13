const mongoose = require('mongoose')
const faker = require ('faker')
const Doctor = require ('../models/doctor')

mongoose.connect('mongodb://localhost/healthcareapp', {
  useNewUrlParser: true, useUnifiedTopology: true 
});

const cities = ['Skopje', 'Bitola', 'Ohrid', 'Veles', 'Struga']
const specialization = ['General Medicine', 'Dermatology', 'Pediatrics', 'Neuro', 'Ophthalmology']

for(let i = 0; i < 10; i++){
  const fakeDoctorData = {
    licence_number: faker.datatype.number({min: '10000000000'}),
    full_name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    specialization: specialization[Math.floor(Math.random() * specialization.length)],
    city: cities[Math.floor(Math.random() * cities.length)]
  }
  const doctor = new Doctor ({
    _id: new mongoose.Types.ObjectId(),
    ...fakeDoctorData
  })
  doctor.save()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}