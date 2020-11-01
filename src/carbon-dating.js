const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && +sampleActivity >= 1 && +sampleActivity <= 15) {
    const ln = Math.log(2);
    const k = ln / HALF_LIFE_PERIOD;

    return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
  }

  return false;
}