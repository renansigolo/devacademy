const functions = require('firebase-functions'),
  nodemailer = require('nodemailer'),
  admin = require('firebase-admin'),
  fs = require('fs'),
  cors = require('cors')({ origin: true })

admin.initializeApp()

const gmailEmail = functions.config().gmail.email
const gmailPassword = functions.config().gmail.password
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
})

exports.sendEmail = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const formPayload = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email
    }

    fs.readFile('templates/welcome.html', { encoding: 'utf-8' }, function(
      err,
      data
    ) {
      // data = data.toString()

      const textMessage = `
      New DevAcademy Subscriber
      Name: ${formPayload.firstName} ${formPayload.lastName}
      First Name: ${formPayload.firstName}
      Last Name: ${formPayload.lastName}
      Email: ${formPayload.email}
      `

      // Build Email message.
      const htmlMessage = `
      <p>New DevAcademy Subscriber</p>
      <p><strong>Name:</strong> ${formPayload.firstName} ${formPayload.lastName}</p>
      <p><strong>First Name:</strong> ${formPayload.firstName}</p>
      <p><strong>Last Name:</strong> ${formPayload.lastName}</p>
      <p><strong>Email:</strong> ${formPayload.email}</p>
      `

      const mailOptions = {
        subject: 'DevAcademy - New Subscriber',
        from: '"DevAcademy Website" <no-reply@devacademy.com.au>',
        to: 'renan@devacademy.com.au',
        html: htmlMessage,
        text: textMessage
      }

      try {
        return mailTransport
          .sendMail(mailOptions)
          .then(() => res.status(200).end())
      } catch (error) {
        console.error('There was an error while sending the email:', error)
        return res.status(500).send(error)
      }
    })

    // return mailTransport
    //   .sendMail(mailOptions)
    //   .then(() => res.status(200).end())
    //   .catch(error => {
    //     console.error('There was an error while sending the email:', error)
    //     res.status(500).send(error)
    //   })
  })
})
