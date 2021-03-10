const express = require('express')
const app = express()

// request handler

app.get('/about', (req, res) => {
  res.send('Ova e about page')
})

app.get('/profile', (req, res) => {
  res.send('Ova e profile page')
})

app.get('/history', (req, res) => {
  res.send('Ova e history page')
})


app.listen(3000, () => {
  console.log('Aplikacijata e startuvana na porta 3000...')
})

app.route('/article')
.post(function(req, res) {
  res.send('Add an article');
})
.patch(function(req, res) {
    res.send('Modify the article');
})
.put(function(req, res) {
  res.send('Update the article');
});