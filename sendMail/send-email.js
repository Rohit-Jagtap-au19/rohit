var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Rohitjagtap1869@gmail.com',
    pass: 'nopassword1234'
  }
});

var mailOptions = {
  from: 'Rohitjagtap1869@gmail.com',
  to: 'Rohitjagtap1869@gmail.com',
  subject: 'Info',
//   text: `App pagal ho muze nahi lgta ye video kisi kam ka he`
    html: '<h1>HELLO</h1><p>Thank you for joining us</p>' 
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});