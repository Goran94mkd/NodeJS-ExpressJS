const express = require('express');
const app = express();

app.use(express.json());

let barcelona = []

app
  .get('/barcelona', (req, res) => {
    res.send(barcelona);
  })
  .post('/barcelona', (req, res) => {
    barcelona.push(req.body)

    res.send({
      message: "You have successfully signed a new player",
      barcelona: req.body
    });
  })
  .delete('/barcelona', (req, res) => {
    barcelona = barcelona.filter(barca => {
      return barca.id != req.body.id
    })
    res.send({
      message: "You have successfully sold a player"
    });
  })
  .put("/barcelona/:id", (req, res) => {
    const playerId = req.params.id;

    const index = barcelona.findIndex((barca) => barca.id == playerId);

    barcelona[index].id = req.body.id;
    barcelona[index].surname = req.body.surname;
    barcelona[index].age = req.body.age;
    barcelona[index].national_team = req.body.national_team;

    res.send({
      message: "DATA updated successfully in PUT metod",
      barcelona
    });
  })
  .patch("/barcelona/:id", (req, res) => {
    const playerId = req.params.id;

    const index = barcelona.findIndex((barca) => barca.id == playerId);

    barcelona[index].id = req.body.id;
    barcelona[index].surname = req.body.surname;
    barcelona[index].age = req.body.age;
    barcelona[index].national_team = req.body.national_team;

    res.send({
      message: "DATA updated successfully in PATCH metod",
      barcelona
    });
  });

app.listen(3000, () => {
  console.log('App is running on port 3000...');
});