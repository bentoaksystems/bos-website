var express = require('express');
var router = express.Router();

var header_json = require('../json-data/header.json');
var people_json = require('../json-data/people.json');
var home_top_section_json = require('../json-data/home_top_section.json');
var technology_json = require('../json-data/technology');
var footer_json = require('../json-data/footer');


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
    if (err) {
      console.error(err);
      res.status(500);
      res.send('Cannot send your message. Please try again.');
    }
    else {
      console.log('Message sent: ', info);
      res.status(200);
      res.send('Your message sent');
    }
  });
});



router.get('/header', function (req, res, next) {
  res.json(header_json);
});

router.get('/people', (req, res, next) => {
  res.json(people_json);
});


router.get('/home/top_section', function(req, res, next) {
  res.json(home_top_section_json);
});

router.get('/technology', function(req, res, next) {
  res.json(technology_json);
});

router.get('/footer', function(req, res, next) {
  res.json(footer_json);
});


module.exports = router;