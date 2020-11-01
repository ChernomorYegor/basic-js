const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (arr.constructor !== Array) {
    throw new Error('Error');
  }

  let result = [];

  if (!arr.length) {
    return result;
  }

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next':
        if (i !== arr.length - 1) {
          i += 1;
        }
        break;
      case '--discard-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          result.pop();
        }
        break;
      case '--double-next':
        if (i !== arr.length - 1) {
          result.push(arr[i + 1]);
        }
        break;
      case '--double-prev':
        if (i !== 0 && arr[i - 2] !== '--discard-next') {
          result.push(arr[i - 1]);
        }
        break;
      default:
        result.push(arr[i]);
        break;
    }
  }

  return result;
}