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

  
  
  transporter.verify((error, success) =>{
      if(error) {
          console.log(error);
      }else{
          console.log('Mail server is running');
      }
  });
module.exports = transporter;