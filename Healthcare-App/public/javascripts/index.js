function deleteDoctor(id) {
  fetch(`http://localhost:3000/doctors/${id}`, {
    method: 'DELETE'
  })
  .then(res => {
    if (!res.error) {
      location.reload();
    }
  })
  .catch(err => {
    console.log('Se sluci greska pri brisenje doktor: ', err);
  });
}