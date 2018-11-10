require('dotenv').config()

const nodemailer = require('nodemailer');

async function sendEmail() 
{
 const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.email,
      pass: process.env.password,
    }
  })
  
  const mailOptions = {
    from: process.env.email,
    to: 'ijuldz@gmail.com',
    subject: 'test mail',
    html: '<h1>this is a test mail.</h1>',
  }
  
  try {
    const response = await transporter.sendMail(mailOptions)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

sendEmail()
