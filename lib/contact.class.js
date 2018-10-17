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
    console.log(req.body);
    if (!['name', 'email', 'content'].every(el => req.body[el])) {
      throw errors.incompleteData;
    }

    let chosenPlanInfo = !Object.keys(req.body.selectedPricingInfo) ? ``: `
      <p> The chosen pricing plan information is as follows: </p>
      <p> Selected Mode: ${req.body.selectedPricingInfo.selectedMode} </p>
      <p> Planning Hours: ${req.body.selectedPricingInfo.planingHour} </p>
      <p> Programming Hours: ${req.body.selectedPricingInfo.programmingHour} </p>
      <p> Backing Hour: ${req.body.selectedPricingInfo.backingHour} </p>
    `;
    let senderName = (req.body.name === null ? 'One of the visitors of BentOak website ' : req.body.name);
    let plainContent = 'Dear Amin,\n' + senderName + ' send you a message.\n' +
      'The message is in below.\n\n' + req.body.content + '\n\n' +
      'Sender\'s email is ' + req.body.email +
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
                     ${chosenPlanInfo}
                     <p>Best regards</p>
                     <p>BentOak Developers</p>`;

    return helpers.sendMail(
      plainContent,
      htmlContent,
      'Contact Us - Bent Oak Visitor',
      'amin@azarbadegan.net'
    );

    // maybe save the data in database ?!
  }


}

module.exports = new Contact();