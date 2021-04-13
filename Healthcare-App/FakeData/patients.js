const mongoose = require('mongoose')
const faker = require('faker')
const Patient = require('../models/patient');

mongoose.connect('mongodb://localhost/healthcareapp', {
  useNewUrlParser: true, useUnifiedTopology: true 
});

const cities = ['Skopje', 'Bitola', 'Ohrid', 'Veles', 'Struga']

for(let i = 0; i < 10; i++){
  const fakePatientData = { 
    ssn: faker.datatype.number({min: '10000000000000'}),
    full_name: faker.fake('{{name.firstName}} {{name.lastName}}'),
    age: faker.datatype.number({min: 10, max: 99}),
    phone_number: faker.datatype.number({max: '100000000'}),
    city: cities[Math.floor(Math.random() * cities.length)],
  }
  const patient = new Patient ({
    _id: new mongoose.Types.ObjectId(),
    ...fakePatientData
  })
  patient.save()
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })
}