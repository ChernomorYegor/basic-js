const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let firstLetterOfNames = [];

  if (Array.isArray(members)) {
    for (let name of members) {
      if (typeof name === 'string') {
        firstLetterOfNames.push(name.trim().toUpperCase()[0]);
      }
    }

    return firstLetterOfNames.sort().join('');
  }

  return false;
}
