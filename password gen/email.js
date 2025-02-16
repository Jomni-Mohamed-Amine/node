var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'amin.jomni77@gmail.com',
    pass: 'gepc bxdb mzry fkne'
  }
});

function sendMail(to,sub,msg){
transporter.sendMail({
    to:to,
    subject:sub,
    html:msg
})
}
sendMail('aymanos141@gmail.com',"subject","this is html content")
