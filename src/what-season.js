const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  const yearStays = (date) => {
    try {
      date.setFullYear(2025);
      return date.getFullYear() === 2025;
    } catch (e) {
      return false;
    }
  };

  if (!(date instanceof Date) || !yearStays(date)) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth();

  if ([0, 1, 11].includes(month)) {
    return "winter";
  }
  if ([2, 3, 4].includes(month)) {
    return "spring";
  }
  if ([5, 6, 7].includes(month)) {
    return "summer";
  }

  return "autumn";
}

module.exports = {
  getSeason,
};
