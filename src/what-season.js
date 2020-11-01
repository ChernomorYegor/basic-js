const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!arguments.length) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== "[object Date]" || isNaN(date.getTime())) {
    throw new Error('Error');
  }
  else {
    let month = date.getMonth();
    if (month < 2 || month > 10) {
      return 'winter'
    } else if (month < 5) {
      return 'spring'
    } else if (month < 8) {
      return 'summer'
    } else {
      return 'autumn'
    }
  }
}
