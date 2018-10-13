const models = require('../mongo/models.mongo');
const helpers = require('./helpers');
const errors = require('./errors.list');

class Contact {
  /**
   * @param {*} req.body.name
   * @param {*} req.body.email
   * @param {*} req.body.content
   */
  async submit(req, res) {
    console.log(req.body);
    if (!['name', 'email', 'content'].every(el => req.body[el])) {
      throw errors.incompleteData;
    }

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

    return helpers.sendMail(
      plainContent,
      htmlContent,
      'Contact Us - Bent Oak Visitor',
      'amin@azarbadegan.net',
    );

    // maybe save the data in database ?!
  }


}

module.exports = new Contact();