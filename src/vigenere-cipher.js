const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    // Конструктор, который определяет, будет ли шифрование прямым или обратным.
    this.isDirect = isDirect;
  }

  processMessage(message, key, encrypt) {
    if (!message || !key) {
      throw new Error('Message and key are required');
    }

    // Приводим все символы сообщения и ключа к верхнему регистру
    const messageUpper = message.toUpperCase();
    const keyUpper = key.toUpperCase();
    let result = '';

    let keyIndex = 0; // Индекс для итерации по символам ключа
    for (let i = 0; i < messageUpper.length; i++) {
      if (messageUpper[i].match(/[A-Z]/)) {
        // Если символ сообщения является буквой (от A до Z)
        const messageCharCode = messageUpper.charCodeAt(i) - 65; // Преобразуем в числовой код (A=0, B=1, ..., Z=25)
        const keyCharCode = keyUpper.charCodeAt(keyIndex % keyUpper.length) - 65; // Аналогично для ключа
        let processedCharCode;

        // Для шифрования (encrypt) и дешифрования (decrypt) рассчитываем новый код буквы
        if (encrypt) {
          processedCharCode = (messageCharCode + keyCharCode) % 26; // Сдвиг для шифрования
        } else {
          processedCharCode = (messageCharCode - keyCharCode + 26) % 26; // Сдвиг для дешифрования
        }

        // Добавляем результат в строку
        result += String.fromCharCode(processedCharCode + 65); // Преобразуем обратно в символ
        keyIndex++; // Увеличиваем индекс для следующего символа ключа
      } else {
        // Если символ не буква, оставляем его без изменений
        result += messageUpper[i];
      }
    }

    // Возвращаем результат в прямом или обратном порядке
    return this.isDirect ? result : result.split('').reverse().join('');
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Message and key are required');
    }
    return this.processMessage(message, key, true); // Шифруем
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Encrypted message and key are required');
    }
    return this.processMessage(encryptedMessage, key, false); // Дешифруем
  }
}

module.exports = {
  VigenereCipheringMachine
};
