const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS_PER_HOUR = 3600;
  let answer = {};

  answer.turns = Math.pow(2, disksNumber) - 1;
  answer.seconds = Math.floor(SECONDS_PER_HOUR / turnsSpeed * answer.turns);

  return answer;
};
