const models = require('../mongo/models.mongo');
const helpers = require('./helpers');
const errors = require('./errors.list');

class Contact {
  /**
   * @param {*} req.body.name
   * @param {*} req.body.email
   * @param {*} req.body.content
   * @param {*} req.body.selectedPricingInfo
   */
  async submit(req, res) {
    // TODO: send phone_number (?) too
    if (!['name', 'email', 'content', 'phoneNumber'].every(el => req.body[el])) {
      throw errors.incompleteData;
    }
    let chosenPlanInfo = !Object.keys(req.body.selectedPricingInfo) ? ``: `
      <p> The chosen pricing plan information is as follows: </p>
      <p> Selected Mode: ${req.body.selectedPricingInfo.title} </p>
      <p> Planning Hours: ${req.body.selectedPricingInfo.planingHour} </p>
      <p> Programming Hours: ${req.body.selectedPricingInfo.programmingHour} </p>
      <p> Backing Hour: ${req.body.selectedPricingInfo.backingHour} </p>
    `;
    let senderName = (req.body.name === null ? 'One of the visitors of BentOak website ' : req.body.name);
    let plainContent = 'Dear Amin,\n' + senderName + ' send you a message.\n' +
      'The message is in below.\n\n' + req.body.content + '\n\n' +
      'Sender\'s email is ' + req.body.email +
      'Sender\'s phone number is ' + req.body.phoneNumber +
      '\n' + chosenPlanInfo +
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
                     <p>Sender's phone number is ${req.body.phoneNumber}</p>
                     ${chosenPlanInfo}
                     <p>Best regards</p>
                     <p>BentOak Developers</p>`;

    // return helpers.sendMail(
    //   plainContent,
    //   htmlContent,
    //   'Contact Us - Bent Oak Visitor',
    //   'amin@azarbadegan.net'
    // );
    await models()['Mail'].insertMany([
      {
        from: req.body['email'],
        name: req.body['name'],
        content: req.body['content'],
        phoneNumber: req.body['phoneNumber'],
        pricing_info: req.body['selectedPricingInfo']
  
      }
    ]);
    // maybe save the data in database ?!
  }



}

module.exports = new Contact();