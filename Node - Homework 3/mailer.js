const nodemailer = require('nodemailer')
const events = require('events')
const emitter = new events.EventEmitter()

// Line 8: Enter your email address in the string
// Line 19: Enter your email password in the string

const fromMail = ''
const toMail = 'goki_bituse@hotmail.com'
const subjectCreated = 'New product!'
const subjectDeleted = 'Oh no! Product Deleted!'
const textCreated = 'This is content for the product created event'
const textDeleted = "Don't over-React.js"

const transporter = nodemailer.createTransport({
  service: 'hotmail',
  auth: {
    user: fromMail,
    pass: ''
  }
});


const productCreatedOptions = {
  from: fromMail,
  to: toMail,
  subject: subjectCreated,
  text: textCreated
}

const productDeletedOptions = {
  from: fromMail,
  to: toMail,
  subject: subjectDeleted,
  text: textDeleted
}

emitter
  .on('product_created', () => {
    transporter.sendMail(productCreatedOptions, (error) => {
      if (error) {
        console.log('The email failed to send', error)
      } else {
        console.log('product_created - Email sent successfully')
      }
    })
  })
  .on('product_deleted', () => {
    transporter.sendMail(productDeletedOptions, (error) => {
      if (error) {
        console.log('The email failed to send', error)
      } else {
      console.log('product_deleted - Email sent successfully')
      }
    })
  })


emitter.emit('product_created')
// emitter.emit('product_deleted')
