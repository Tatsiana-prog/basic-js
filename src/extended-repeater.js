const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  // Ensure the base string is converted to string
  str = String(str);

  // Handle the addition string and its default value
  let addition = options.addition === undefined ? '' : String(options.addition);

  // Handle the base string repetition
  let repeatedStr = Array(options.repeatTimes || 1).fill(str).join(options.separator || '+');

  // Handle the addition string repetition
  let repeatedAddition = Array(options.additionRepeatTimes || 1).fill(addition).join(options.additionSeparator || '|');

  // Combine the base string and addition (addition is added after each base string repetition)
  return repeatedStr.split(str).join(str + repeatedAddition);
}

module.exports = {
  repeater
};

