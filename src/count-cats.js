const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let result = 0;
  let arrayCombined = [];

  for (let array of matrix) {
    arrayCombined = arrayCombined.concat(array);
  }

  for (let i = 0; i < arrayCombined.length; i++) {
    if (arrayCombined[i] === '^^') {
      result += 1;
    }
  }

  return result;
}
