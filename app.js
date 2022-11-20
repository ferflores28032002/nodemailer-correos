const nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail", // hostname
  secure: false, // use SSL
  port: 25, // port for secure SMTP
  auth: {
    user: "",
    pass: "",
  },
  tls: {
    rejectUnauthorized: false,
  },
});
// send mail with defined transport object
let info = transporter.sendMail(
  {
    from: "fernandojose28032002@gmail.com", // sender address
    to: "franxdrush@gmail.com", // list of receivers
    subject: "Hello fernando jose ", // Subject line
    text: "Hello world", // plain text body
  },
  (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("enviado");
    }
  }
);
