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
  // Проверка на отсутствие аргумента
  if (!date) {
    throw new Error("Invalid date!");
  }

  // Проверка на корректность даты
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error("Invalid date!");
  }

  const month = date.getMonth(); // Получаем месяц (0 = январь, 11 = декабрь)

  // Определяем сезон в зависимости от месяца
  if (month >= 2 && month <= 4) {
    return 'spring'; // март, апрель, май
  } else if (month >= 5 && month <= 7) {
    return 'summer'; // июнь, июль, август
  } else if (month >= 8 && month <= 10) {
    return 'autumn'; // сентябрь, октябрь, ноябрь
  } else {
    return 'winter'; // декабрь, январь, февраль
  }
}

module.exports = {
  getSeason
};

