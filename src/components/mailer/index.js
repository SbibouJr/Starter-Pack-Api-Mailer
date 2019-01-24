const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'account@gmail.com', // gmail account
    pass: 'pass' // gmail pass
  }
});

const mailOptions = {
  from: '"Fred Foo 👻" <account@gmail.com>', // sender address
  to: 'account@gmail.com', // list of receivers
  subject: 'Hello ✔', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>' // html body
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
    res.json('Error');
  } else {
    console.log('Email sent: ' + info.response);
    res.json('Mail envoyé');
  }
});
