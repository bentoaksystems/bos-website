const nodemailer = require('nodemailer');
const env = require('../env');

function parseServerError(err) {
  try {
    let a;
    let dashPlace = err.message.indexOf('-');
    let statusCode = err.message.substring(0, dashPlace);
    eval(`a=${err.message.substring(dashPlace + 2)}`);

    try {
      err = JSON.parse(a);
    } catch (e) {
      if (a) {
        err.Message = a;
      } else {
        throw e;
      }
    }
    err.statusCode = statusCode;
    return err;
  } catch (e) {
    return err;
  }
}

function parseServerErrorToString(err) {
  try {
    err = parseServerError(err);
    return `SERVER ERROR:\nStatus: ${err.statusCode}\nMessage: ${err.Message}${err.Stack ? '\nServer stack:\n' + err.Stack : ''}`;
  } catch (e) {
    return err;
  }
}

function parseJasmineErrorToString(err) {
  return `TEST ERROR:\nMessage: ${err.message}\nStack: ${err.stack}`;
}

function errorHandler(err) {
  if (err.response)
    this.fail(parseServerErrorToString(err));
  else
    this.fail(parseJasmineErrorToString(err));
  this.done();
}

function sendMail(plainContent, htmlContent, mailSubject, mailTo) {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport(env.mailConfig);
    let mailOptions = {
      from: env.mailConfig.from,
      to: mailTo,
      subject: mailSubject,
      text: plainContent,
      html: htmlContent
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('ERROR in sending Email: ', err);
        reject(err);
      } else {
        console.log('Email Sent: ', info);
        resolve('mail is sent');
      }
    });
  });
}

module.exports = {
  parseServerError,
  parseServerErrorToString,
  parseJasmineErrorToString,
  errorHandler,
  sendMail,
};