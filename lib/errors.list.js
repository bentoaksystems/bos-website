
// follow the pattern
let incompleteData = new Error('The passed data is incomplete!');
incompleteData.status = 404;

let unauthorized = new Error('Not Authorized');
unauthorized.status = 403;

module.exports = {
  unauthorized,
  incompleteData,
};