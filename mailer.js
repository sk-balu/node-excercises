// SMTP Mailer Module
const nodemailer = require('nodemailer');

/* 
  TO MAKE THIS TRANSPORTER WORK, NEED TO ENABLE LESS APP SECURE OPTION 
  IN THE "FROM GMAIL ACCOUNT".
  https://www.google.com/settings/security/lesssecureapps
*/

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "from@gmail.com",
    pass: "****"
  }
});

const mailOptions = {
  to: 'to@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail( mailOptions, (error, info)=>{
  if (error) { console.log(error); }
  else { console.log('Email sent: ' + info.response); }
});
