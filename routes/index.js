var express = require('express');
var router = express.Router();
const nodemailer = require('nodemailer');
const path = require('path');
var mailData = require('../config.mail');

/* Diverting unknown routes to Angular router */
router.all("*",function(req,res,next){
  /* Redirect http to https */
    if(req.originalUrl.indexOf('api') === -1) {
        console.log('[TRACE] Server 404 request: ' + req.originalUrl);
        var p = path.join(__dirname, '../public', 'index.html').replace(/\/routes\//, '/');
        res.status(200).sendFile(p);
    }
    else
        next();
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/api/contact', function (req, res, next) {
  let mailConfig = {
    host: 'smtp.mailgun.org',
    port: '465',
    secure: true,
    auth: {
      user: mailData.getMailCredentialData().user_name,
      pass: mailData.getMailCredentialData().password
    },
    tls: {
      rejectUnauthorized: false
    },
    from: "Bent Oak systems <no-reply@bentoak.systems>",
    to: 'amin.azarbadegan@gmail.com'
  };

  let transport = nodemailer.createTransport(mailConfig);

  let senderName = (req.body.name === null ? 'One of the visitors of BentOak website ' : req.body.name);

  let plainContent = 'Dear Amin,\n' + senderName + ' send you a message.\n' +
                     'The message is in below.\n\n' + req.body.content + '\n\n' +
                     'Sender\'s email is ' + req.body.email +
                     '\nBest regards,\nBentOak Developers';

  let htmlContent = `<p>Dear Amin</p>
                     <p>${senderName} send you a message</p>
                     <p>The message is in below</p>
                     <br/>
                     <br/>
                     <div>${req.body.content}</div>
                     <br/>
                     <br/>
                     <p>Sender's email is ${req.body.email}</p>
                     <p>Best regards</p>
                     <p>BentOak Developers</p>`;

  let mailOptions = {
    from: mailConfig.from,
    to: mailConfig.to,
    subject: 'Contact us - BentOak visitor',
    text: plainContent,
    html: htmlContent
  };

  transport.sendMail(mailOptions, (err, info) => {
    if(err){
      console.error(err);
      res.status(500);
      res.send('Cannot send your message. Please try again.');
    }
    else{
      console.log('Message sent: ', info);
      res.status(200);
      res.send('Your message sent');
    }
  });
});

module.exports = router;
