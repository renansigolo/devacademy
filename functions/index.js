const functions = require('firebase-functions'),
  nodemailer = require('nodemailer'),
  admin = require('firebase-admin'),
  cors = require('cors')({ origin: true })

admin.initializeApp()

// const gmailEmail = functions.config().gmail.email
// const gmailPassword = functions.config().gmail.password
// const mailTransport = nodemailer.createTransport({
//   service: 'gmail',
//   host: 'smtp.gmail.com',
//   port: 465,
//   secure: true,
//   auth: {
//     user: gmailEmail,
//     pass: gmailPassword
//   }
// })

exports.sendEmail = functions.https.onRequest((req, res) => {
  return cors(req, res, () => {
    const formPayload = {
      username: req.body.username,
      postEditUrl: req.body.postEditUrl,
      postPreviewUrl: req.body.postPreviewUrl
    }

    const mailOptions = {
      subject: 'DevAcademy Website Subscription',
      from: '"DevAcademy Website" <hello@devacademy.com.au>',
      to: 'hello@devacademy.com.au',
    }

    // Build Email message.
    const htmlMessage = `
    <p>Hello,</p>
    <p>${formPayload.username} has just submitted an Approved Truck.</p>
    <p>You can see a preview of the Approved Truck <a href="${formPayload.postPreviewUrl}">here</a></p>
    <p>You can edit and publish the Approved Truck <a href="${formPayload.postEditUrl}">here</a></p>
    <p>Yours robotically,</p>
    <p>The Linde Approved Trucks app 🤖</p>`

    const textMessage = `Hello,
    ${formPayload.username} has just submitted an Approved Truck. 
    You can see a preview of the Approved Truck here: ${formPayload.postPreviewUrl}
    You can edit and publish the Approved Truck here: ${formPayload.postEditUrl}
    Yours robotically,
    The Linde Approved Trucks app 🤖`

    mailOptions.html = htmlMessage
    mailOptions.text = textMessage

    return mailTransport
      .sendMail(mailOptions)
      .then(() => res.status(200).end())
      .catch(error => {
        console.error('There was an error while sending the email:', error)
        res.status(500).send(error)
      })
  })
})
