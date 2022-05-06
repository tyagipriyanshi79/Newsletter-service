const nodemailer = require('nodemailer');
const { resolveHostname } = require('nodemailer/lib/shared');

const transporter = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "94a327e5d45f6c",
      pass: "50913633a14a01"
    }
  });

  // setup email data with unicode symbols
  const mailOptions = {
      from: '"Nodemailer Contact" <your@email.com>', // sender address
      to: 'RECEIVEREMAILS', // list of receivers
      subject: 'Node Contact Request', // Subject line
      text: 'Hello world?', // plain text body
      //html: output // html body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact', {msg:'Email has been sent'});
  });
  
  transporter.verify((error, success) =>{
      if(error) {
          console.log(error);
      }else{
          console.log('Mail server is running');
      }
  });
module.exports = transporter;