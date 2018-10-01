let credentialData;

let mailCredentialData = (data) => {
  credentialData = data;
};

let getMailCredentialData = () => {
  return credentialData;
};

module.exports = {
  mailCredentialData,
  getMailCredentialData,
};