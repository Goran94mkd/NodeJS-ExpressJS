const express = require('express')
const app = express()

// 1. Request headers 
// In Postman check the request headers:
// host -- user-agent -- connection


app.route('/reqheaders')
  .post(function (req, res) {
    res.send(req.header('host'));
    // The Host request header specifies the host and port number of the server to which the request is being sent
  })
  .patch(function (req, res) {
    res.send(req.header('user-agent'));
    // The User-Agent request header is a characteristic string that lets servers and network peers, 
    // identify the application, operating system, vendor, and/or version of the requesting user agent.
  })
  .put(function (req, res) {
    res.send(req.header('connection'));
    //The Connection general header controls whether or not the network connection stays open after the current transaction finishes. 
    //If the value sent is keep-alive, the connection is persistent and not closed,
    //allowing for subsequent requests to the same server to be done.
  });



// 2.Response headers
// In the browser, check the response headers:
// content-length -- content-type -- date

app.get('/resheaders1', (req, res) => {
  res.send('In responses, a Content-Type header tells the client what the content type of the returned content actually is.')
})
app.get('/resheaders2', (req, res) => {
  res.json('The Content-Length entity header indicates the size of the entity-body, in bytes, sent to the recipient.')
})
app.get('/resheaders3', (req, res) => {
  res.send('The Date general HTTP header contains the date and time at which the message was originated')
})



app.listen(3000, () => {
  console.log('Aplikacijata e startuvana na porta 3000...')
})