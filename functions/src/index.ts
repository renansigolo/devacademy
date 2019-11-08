// Firebase Config
import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp()

// Sendgrid Config
import * as sgMail from '@sendgrid/mail'

const API_KEY = functions.config().sendgrid.key
const TEMPLATE_ID = functions.config().sendgrid.template
sgMail.setApiKey(API_KEY)

// Sends email to user after signup
export const welcomeEmail = functions.auth.user().onCreate(user => {
  const msg = {
    to: user.email,
    from: '"DevAcademy Website" <no-reply@devacademy.com.au>',
    templateId: TEMPLATE_ID,
    dynamic_template_data: {
      subject: 'Welcome to DevAcademy!',
      name: user.displayName
    }
  }

  return sgMail.send(msg)
})
